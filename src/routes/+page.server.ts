export const load = async ({ locals: { prisma } }) => {
	const fetchedWorkouts = await prisma.vwWorkout.findMany();
	const workouts = fetchedWorkouts.map((x) => {
		return { ...x, lastModifiedOn: x.lastModifiedOn.toLocaleDateString() };
	});

	return { workouts };
};
