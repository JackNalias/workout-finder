export const load = async ({ parent }) => {
	const { supabase } = await parent();
	const { data: workouts } = await supabase.from('workouts').select('*');

	return {
		workouts
	};
};
