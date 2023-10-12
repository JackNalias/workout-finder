import type { VwWorkout, Workout } from '@prisma/client';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import sanitizeHtml from 'sanitize-html';

export const POST: RequestHandler = async ({ request, locals: { prisma, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw error(401);
	}

	const body = (await request.json()) as Workout; // not safe

	if (body.title?.length > 200) {
		throw error(400);
	}

	if (body.excerpt?.length > 2000) {
		sanitizeHtml.defaults;
		throw error(400);
	}

	if (body.quill_plain_text.length < 1) {
		throw error(400);
	}

	body.quill_html = sanitizeHtml(body.quill_html, {
		allowedTags: ['iframe', ...sanitizeHtml.defaults.allowedTags],
		allowedClasses: {
			'*': ['*']
		},
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			'*': ['class']
		}
	});

	await prisma.workout.create({
		data: {
			fkCreatedByUserId: session.user.id,
			title: body.title,
			excerpt: body.excerpt,
			quill_plain_text: body.quill_plain_text,
			quill_delta_json: JSON.stringify(body.quill_delta_json),
			quill_html: body.quill_html
		}
	});

	return new Response();
};

export const GET: RequestHandler = async ({ locals: { prisma }, url }) => {
	const searchParam = url.searchParams.get('search');
	let workouts: Array<VwWorkout>;

	if (searchParam === null || searchParam.length === 0) {
		workouts = await prisma.vwWorkout.findMany();
	} else {
		const searchValues = searchParam.split(' ');

		const or = new Array<Record<string, unknown>>(0);

		const columns = ['excerpt', 'title', 'createdByUserName'];

		for (let i = 0; i < columns.length; i++) {
			const col = columns[i];
			for (let j = 0; j < searchValues.length; j++) {
				const searchValue = searchValues[j];
				const record: Record<string, unknown> = {};
				const innerRecord = {
					contains: searchParam
				};
				innerRecord.contains = searchValue;
				record[col] = innerRecord;
				or.push(record);
			}
		}

		workouts = await prisma.vwWorkout.findMany({
			where: {
				OR: or
			}
		});
	}

	return json(workouts);
};
