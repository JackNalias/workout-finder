import { error } from '@sveltejs/kit';

export const load = async ({ params, locals: { prisma, getSession } }) => {
	const workout = await prisma.vwWorkout.findFirst({
		where: { workoutId: +params.uniqueWorkoutId }
	});

	if (!workout) {
		throw error(404);
	}

	const session = await getSession();
	if (!session) {
		return {
			workout,
			userLikedWorkout: false,
			userDislikedWorkout: false
		};
	}

	const userLikedWorkout = (await prisma.workoutLike.findFirst({
		where: { fkUserId: session.user.id, AND: { fkWorkoutId: workout.workoutId } }
	}))
		? true
		: false;
	const userDislikedWorkout = (await prisma.workoutDislike.findFirst({
		where: { fkUserId: session.user.id, AND: { fkWorkoutId: workout.workoutId } }
	}))
		? true
		: false;

	return {
		workout,
		userLikedWorkout,
		userDislikedWorkout
	};
};
