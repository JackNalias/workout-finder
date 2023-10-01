import { error, redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/login');
	}
	const { data: userProfile } = await supabase
		.from('user')
		.select('*')
		.eq('id', session.user.id)
		.limit(1)
		.single();

	if (!userProfile) {
		throw error(500);
	}

	return {
		userProfile,
		user: session.user
	};
};
