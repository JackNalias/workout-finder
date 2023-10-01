import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/login');
	}
	const { data: workouts } = await supabase
		.from('workouts')
		.select('*')
		.eq('fk_created_by_user_id', session.user.id);

	return {
		workouts
	};
};
