import { error } from '@sveltejs/kit';
import type { RequestHandler } from '../../../auth/callback/$types';
import type { Json } from '../../../../database.types';

export interface PostAWorkoutBody {
	quillDeltaJson: Json;
	quillHtml: string;
	quillPlainText: string;
	excerpt: string;
	title: string;
}

export const POST: RequestHandler = async ({ request, locals: { supabase, getSession } }) => {
	const bodyJson = (await request.json()) as PostAWorkoutBody;
	const userUuid = (await getSession())?.user.id as string; // safe cast as error will be handled when fetching userId

	const { data: user, error: userIdSelectError } = await supabase
		.from('user')
		.select('id')
		.eq('fk_user_uuid', userUuid)
		.limit(1)
		.maybeSingle();

	if (userIdSelectError) {
		throw error(500, { message: userIdSelectError.message });
	} else if (user === null) {
		throw error(500, { message: 'user not found' });
	}

	const { error: insertWorkoutError } = await supabase
		.from('workouts')
		.insert({
			title: bodyJson.title,
			excerpt: bodyJson.excerpt,
			quill_delta_json: bodyJson.quillDeltaJson,
			quill_html: bodyJson.quillHtml,
			quill_plain_text: bodyJson.quillPlainText,
			fk_created_by_user_id: user.id
		})
		.select();

	if (insertWorkoutError) {
		throw error(500, { message: insertWorkoutError.message });
	}

	return new Response();
};
