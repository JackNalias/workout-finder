import { rowNotFoundErrorCode } from '$lib/constants/error-codes/postgress';
import type { Session, SupabaseClient } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';
import type { Database } from '../../database.types';

export const fetchUserWorkoutStat = async (
	table: 'workout_like' | 'workout_dislike',
	session: Session,
	supabase: SupabaseClient<Database>,
	workoutId: number
) => {
	const res = await supabase
		.from(table)
		.select('*')
		.eq('fk_user_id', session.user.id)
		.eq('fk_workout_id', workoutId)
		.limit(1)
		.single();

	// if row not found
	if (res.error && res.error.code !== rowNotFoundErrorCode) {
		throw error(500);
	}

	// if error or no data and error is not rowNotFoundErrorCode
	if (res.error || !res.data) {
		return false;
	}

	return true;
};

// toggles like / dislike for a given (workout, user) pair
export const deleteUserWorkoutStat = async (
	workoutId: number,
	userId: string,
	supabase: SupabaseClient<Database>,
	nameOfStatTable: 'workout_like' | 'workout_dislike'
) => {
	return await supabase
		.from(nameOfStatTable)
		.delete()
		.eq('fk_user_id', userId)
		.eq('fk_workout_id', workoutId);
};

export const addUserWorkoutStat = async (
	nameOfStatTable: 'workout_like' | 'workout_dislike',
	supabase: SupabaseClient<Database>,
	workoutId: number
) => {
	return await supabase.from(nameOfStatTable).insert({
		fk_workout_id: workoutId
	});
};
