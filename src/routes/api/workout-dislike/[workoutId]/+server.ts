import { error, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals: { prisma, getSession }, params }) => {
	const session = await getSession();
	if (!session) {
		throw error(401);
	}

	if (!params.workoutId) {
		throw error(400);
	}

	if (Number.isNaN(+params.workoutId)) {
		throw error(400);
	}

	const alreadyDisliked = await prisma.workoutDislike.findFirst({
		where: { fkUserId: session.user.id, AND: { fkWorkoutId: +params.workoutId } }
	});

	if (alreadyDisliked) {
		throw error(400);
	}

	await prisma.workoutDislike.create({
		data: {
			fkUserId: session.user.id,
			fkWorkoutId: +params.workoutId
		}
	});

	return new Response();
};

export const DELETE: RequestHandler = async ({ locals: { prisma, getSession }, params }) => {
	const session = await getSession();
	if (!session) {
		throw error(401);
	}

	if (!params.workoutId) {
		throw error(400);
	}

	if (Number.isNaN(+params.workoutId)) {
		throw error(400);
	}

	await prisma.workoutDislike.delete({
		where: { fkUserId_fkWorkoutId: { fkUserId: session.user.id, fkWorkoutId: +params.workoutId } }
	});

	return new Response();
};
