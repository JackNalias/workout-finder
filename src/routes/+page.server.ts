import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { prisma } }) => {
	return { workouts: await prisma.workout.findMany() };
};
