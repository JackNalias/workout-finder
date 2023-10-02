<script lang="ts">
	import { onMount } from 'svelte';
	import '../../../../quill.css';
	import type Quill from 'quill';
	import PostSuccessModal from '$lib/components/Modals/PostSuccessModal.svelte';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let editor: HTMLElement;
	let quill: Quill;
	let title: string;
	let excerpt: string;
	let workoutPostedSuccess = false;

	onMount(async () => {
		const { default: Quill } = await import('quill');

		quill = new Quill(editor, {
			modules: {
				toolbar: [
					[{ header: [1, 2, 3, 4, false] }],
					['bold', 'italic', 'underline', 'strike'],
					[{ script: 'super' }, { script: 'sub' }],
					['blockquote', 'code-block'],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
					[{ align: [] }],
					['link', 'image', 'video']
				]
			},
			theme: 'snow',
			placeholder: 'Write your workout...'
		});
	});

	const onPostWorkout = async () => {
		const { error: insertWorkoutError } = await supabase
			.from('workouts')
			.insert({
				title: title,
				excerpt: excerpt,
				quill_delta_json: JSON.parse(JSON.stringify(quill.getContents())),
				quill_html: quill.root.innerHTML,
				quill_plain_text: quill.getText()
			})
			.select();
		workoutPostedSuccess = true;
		console.log(insertWorkoutError);
	};
</script>

<div class="pt-9">
	<nav class="sm:hidden" aria-label="Back">
		<a
			href="/account/workouts"
			class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-2"
		>
			<svg
				class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
					clip-rule="evenodd"
				/>
			</svg>
			Back to My Workouts
		</a>
	</nav>
	<nav class="hidden sm:flex" aria-label="Breadcrumb">
		<ol role="list" class="flex items-center space-x-4">
			<li>
				<div class="flex">
					<a href="/account/workouts" class="text-sm font-medium text-gray-500 hover:text-gray-700"
						>My Workouts</a
					>
				</div>
			</li>
			<li>
				<div class="flex items-center">
					<svg
						class="h-5 w-5 flex-shrink-0 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
					<a
						href="/account/workouts/post-a-workout"
						class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Post a Workout</a
					>
				</div>
			</li>
		</ol>
	</nav>
	<form id="post-a-workout-form" on:submit={onPostWorkout}>
		<div class="md:flex md:items-center md:justify-between">
			<div class="min-w-0 flex-1">
				<h2
					class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
				>
					Post a workout
				</h2>
			</div>
			<div class="mt-4 flex md:ml-4 md:mt-0">
				<button
					type="button"
					class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>Save as draft</button
				>
				<button
					type="submit"
					class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Publish</button
				>
			</div>
		</div>

		<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div class="sm:col-span-4">
				<label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
				<div class="mt-2">
					<div
						class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
					>
						<input
							type="text"
							name="title"
							id="title"
							class="block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
							placeholder="My Awesome Workout"
							bind:value={title}
						/>
					</div>
				</div>
			</div>

			<div class="col-span-full">
				<label for="excerpt" class="block text-sm font-medium leading-6 text-gray-900"
					>Excerpt</label
				>
				<div class="mt-2">
					<textarea
						id="excerpt"
						name="excerpt"
						rows="3"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="This workout will take you through..."
						bind:value={excerpt}
					/>
				</div>
				<p class="mt-3 text-sm leading-6 text-gray-600">
					Write a quick introduction to your workout.
				</p>
			</div>

			<div class="col-span-full">
				<label for="workout-content" class="block text-sm font-medium leading-6 text-gray-900"
					>Workout Content
				</label>
				<p class="mb-1.5 text-sm leading-6 text-gray-600">Feel free to link your socials 😀</p>
				<div id="editor">
					<div bind:this={editor} class="h-screen prose prose-2xl max-w-none" />
				</div>
			</div>
		</div>
	</form>
</div>
<PostSuccessModal open={workoutPostedSuccess} />
