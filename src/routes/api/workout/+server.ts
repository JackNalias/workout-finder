import type { Workout } from '@prisma/client';
import { error, type RequestHandler } from '@sveltejs/kit';
import sanitizeHtml, { defaults } from 'sanitize-html';

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
		throw error(400);
	}

	if (body.quill_plain_text.length < 1) {
		throw error(400);
	}

	body.quill_html = sanitizeHtml(body.quill_html, {
		allowedTags: ['iframe', ...defaults.allowedTags],
		allowedClasses: {
			'*': ['*']
		},
		allowedAttributes: {
			...defaults.allowedAttributes,
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
