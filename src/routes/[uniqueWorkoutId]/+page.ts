import { error } from '@sveltejs/kit';

export const load = async ({ parent, params }) => {
	const { supabase } = await parent();
	const { data: workout, error: selectWorkoutError } = await supabase
		.from('workouts')
		.select('*')
		.eq('id', params.uniqueWorkoutId)
		.limit(1)
		.single();

	if (selectWorkoutError?.code === 'PGRST116') {
		throw error(404);
	} else if (selectWorkoutError) {
		throw error(500);
	}

	return {
		workout
	};
};
