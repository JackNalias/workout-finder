import { error, type RequestHandler } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ params, locals: { getSession, prisma } }) => {
	const session = await getSession();
	if (!session) {
		throw error(401);
	}

	if (params.workoutId && Number.isSafeInteger(+params.workoutId)) {
		await prisma.$transaction([
			prisma.workoutLike.deleteMany({
				where: {
					fkUserId: session.user.id,
					AND: { fkWorkoutId: +params.workoutId }
				}
			}),
			prisma.workoutDislike.deleteMany({
				where: {
					fkUserId: session.user.id,
					AND: { fkWorkoutId: +params.workoutId }
				}
			}),
			prisma.workout.delete({
				where: {
					id: +params.workoutId,
					AND: { fkCreatedByUserId: session.user.id }
				}
			})
		]);
	}

	return new Response();
};
