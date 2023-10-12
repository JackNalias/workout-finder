<script lang="ts">
	import '../../quill.css';

	export let data;

	let statActionedWhilstNoSession = false;
	let serverErrorOnStatAction = false;

	const resetState = () => {
		statActionedWhilstNoSession = false;
		serverErrorOnStatAction = false;
	};

	const onLike = async () => {
		resetState();
		let method = 'POST';
		serverErrorOnStatAction = false;

		if (data.userLikedWorkout) {
			method = 'DELETE';
		}

		const res = await fetch(`/test/api/workout-like/${data.workout.workoutId}`, {
			method
		});

		if (!res.ok) {
			serverErrorOnStatAction = true;
			return;
		}

		if (method === 'POST') {
			data.userLikedWorkout = true;
			data.workout.likes++;
			return;
		}

		data.workout.likes--;
		data.userLikedWorkout = false;
	};

	const onDislike = async () => {
		resetState();
		let method = 'POST';
		serverErrorOnStatAction = false;

		if (data.userDislikedWorkout) {
			method = 'DELETE';
		}

		const res = await fetch(`/test/api/workout-dislike/${data.workout.workoutId}`, {
			method
		});

		if (!res.ok) {
			serverErrorOnStatAction = true;
			return;
		}

		if (method === 'POST') {
			data.userDislikedWorkout = true;
			data.workout.dislikes++;
			return;
		}

		data.workout.dislikes--;
		data.userDislikedWorkout = false;
	};
</script>

<div class="prose prose-xl mx-auto py-12 px-4 sm:px-0">
	<article class="ql-editor">
		{@html data.workout.quill_html}
	</article>
	<div class="mt-12 flex justify-between text-base items-end">
		<form class="flex gap-4 mt-2">
			<button class="flex gap-1 items-center" on:click={onLike}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="#000000"
					version="1.1"
					id="Layer_1"
					width="800px"
					height="800px"
					viewBox="0 0 8 8"
					enable-background="new 0 0 8 8"
					xml:space="preserve"
					class="w-3.5 h-3.5 fill-green-700"
					><rect
						x="0.016"
						y="1.68"
						transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
						width="5.283"
						height="1.466"
					/><rect x="3.161" y="1.604" width="1.683" height="6.375" /><rect
						x="2.709"
						y="1.674"
						transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
						width="5.284"
						height="1.465"
					/></svg
				>
				<div
					class="text-lg font-semibold {data.userLikedWorkout ? 'border-b border-blue-500' : ''}"
				>
					{data.workout.likes}
				</div>
			</button>

			<button class="flex gap-1 items-center" on:click={onDislike}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="#000000"
					version="1.1"
					id="Layer_1"
					width="800px"
					height="800px"
					viewBox="0 0 8 8"
					enable-background="new 0 0 8 8"
					xml:space="preserve"
					class="w-3.5 h-3.5 fill-red-700 rotate-180"
					><rect
						x="0.016"
						y="1.68"
						transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
						width="5.283"
						height="1.466"
					/><rect x="3.161" y="1.604" width="1.683" height="6.375" /><rect
						x="2.709"
						y="1.674"
						transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
						width="5.284"
						height="1.465"
					/></svg
				>
				<div
					class="text-lg font-semibold {data.userDislikedWorkout ? 'border-b border-blue-500' : ''}"
				>
					{data.workout.dislikes}
				</div>
			</button>
		</form>
		<div class="flex flex-col text-base text-right">
			<span>By: Jack Nalias</span>
			<span>Last updated: 2023-01-15</span>
		</div>
	</div>
</div>

<style>
	.ql-editor {
		padding: 0px;
	}

	:global(iframe) {
		width: 1000px;
		height: 563px;
	}
</style>
