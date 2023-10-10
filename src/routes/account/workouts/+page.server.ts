import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { prisma, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(303, '/auth/signin');
	}

	return {
		workouts: prisma.workout.findMany({ where: { fkCreatedByUserId: session.user.id } })
	};
};