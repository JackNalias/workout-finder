import { error } from '@sveltejs/kit';

export const load = async ({ params, locals: { prisma } }) => {
	const workout = await prisma.workout.findFirst({ where: { id: +params.uniqueWorkoutId } });

	if (!workout) {
		throw error(404);
	}

	return {
		workout: await prisma.workout.findFirst({ where: { id: +params.uniqueWorkoutId } })
	};
};
