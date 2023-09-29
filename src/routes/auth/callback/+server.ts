import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get('code');

	if (code) {
		console.log('code found');
		const session = (await supabase.auth.exchangeCodeForSession(code)).data.session;
		console.log('session', session);
		if (session) {
			const { data: userId } = await supabase
				.from('user')
				.select('id')
				.eq('id', session.user.id)
				.limit(1)
				.maybeSingle();
			if (!userId?.id) {
				await supabase.from('user').insert({
					id: session.user.id,
					display_name: session.user.email as string
				});
			}
		}
	}

	throw redirect(303, '/');
};
