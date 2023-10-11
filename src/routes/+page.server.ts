export const load = async ({ locals: { prisma } }) => {
	const workouts = await prisma.vwWorkout.findMany();

	return { workouts };
};
