<script lang="ts">
	import { addUserWorkoutStat, deleteUserWorkoutStat } from '$lib/utlities/data-fetchers';
	import '../../quill.css';
	import type { PostgrestError } from '@supabase/supabase-js';

	export let data;

	let statActionedWhilstNoSession = false;
	let serverErrorOnStatAction = false;

	data.isWorkoutLiked = false;
	data.isWorkoutDisliked = false;

	const resetState = () => {
		statActionedWhilstNoSession = false;
		serverErrorOnStatAction = false;
	};

	const onLike = async () => {};

	const onDislike = async () => {};
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
				<div class="text-lg font-semibold {data.isWorkoutLiked ? 'border-b border-blue-500' : ''}">
					10k
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
					class="text-lg font-semibold {data.isWorkoutDisliked ? 'border-b border-blue-500' : ''}"
				>
					10k
				</div>
			</button>
			<button class="flex gap-1 items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="800px"
					height="800px"
					viewBox="0 0 32 32"
					version="1.1"
					class="w-3.5 h-3.5"
					><g id="Page-1" stroke="black" stroke-width="2" fill="none" fill-rule="evenodd"
						><g id="Icon-Set" transform="translate(-360.000000, -255.000000)" fill="#000000"
							><path
								d="M390,277 C390,278.463 388.473,280 387,280 L379,280 L376,284 L373,280 L365,280 C363.527,280 362,278.463 362,277 L362,260 C362,258.537 363.527,257 365,257 L387,257 C388.473,257 390,258.537 390,260 L390,277 L390,277 Z M386.667,255 L365.333,255 C362.388,255 360,257.371 360,260.297 L360,277.187 C360,280.111 362.055,282 365,282 L371.639,282 L376,287.001 L380.361,282 L387,282 C389.945,282 392,280.111 392,277.187 L392,260.297 C392,257.371 389.612,255 386.667,255 L386.667,255 Z"
								id="comment-5"
							/></g
						></g
					></svg
				>
				<div class="text-lg font-semibold border-b border-blue-500">10k</div>
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
