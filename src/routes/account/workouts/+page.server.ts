import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { prisma, getSession }, depends }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(303, '/auth/signin');
	}

	depends('user:workouts');

	return {
		workouts: prisma.vwWorkout.findMany({ where: { createdByUserId: session.user.id } })
	};
};
