<script lang="ts">
	export let data;

	let search = '';

	const onSearch = async () => {
		const res = await fetch(`/test/api/workout/?search=${search}`);
		if (res.ok) {
			data.workouts = await res.json();
		}
	};
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
	<div class="max-w-4xl mx-auto mb-4">
		<div class="text-right mb-4">
			<a
				type="button"
				href="/account/workouts/post-a-workout"
				class="rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Post a Workout</a
			>
		</div>

		<div class="mt-2 flex rounded-md shadow-sm">
			<div class="relative flex flex-grow items-stretch focus-within:z-10">
				<input
					name="search"
					id="search"
					class="block w-full rounded-none rounded-l-md border-0 py-3 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl"
					placeholder="Search"
					bind:value={search}
					on:keypress={(e) => e.key === 'Enter' && onSearch()}
				/>
			</div>
			<button
				type="button"
				on:click={() => onSearch()}
				class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
			>
				Search
			</button>
		</div>
	</div>
	<ul role="list" class="max-w-4xl mx-auto divide-y divide-gray-100">
		{#if data.workouts}
			{#each data.workouts as article}
				<li class="relative py-5 hover:bg-gray-50">
					<div class="">
						<div class="mx-auto flex max-w-4xl justify-between gap-x-6">
							<div class="flex min-w-0 gap-x-4">
								<div class="min-w-0 flex-auto">
									<p class="text-lg font-semibold leading-6 text-gray-900">
										<a href="/{article.workoutId}">
											<span class="absolute inset-x-0 -top-px bottom-0" />
											{article.title}
										</a>
									</p>
									<p class="mt-1 flex text-md leading-5 text-gray-500">
										<span class="relative hover:cursor-pointer">{article.excerpt}</span>
									</p>
								</div>
							</div>
							<div class="flex shrink-0 items-center gap-x-4">
								<div class="hidden sm:flex sm:flex-col sm:items-end">
									<p class="text-sm leading-6 text-gray-900">By: {article.createdByUserName}</p>
									<p class="mt-1 text-xs leading-5 text-gray-500">
										Last updated: <time datetime={article.lastModifiedOn}
											>{article.lastModifiedOn}</time
										>
									</p>
								</div>
								<svg
									class="h-5 w-5 flex-none text-gray-400"
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
							</div>
						</div>
					</div>
					<div class="flex gap-4 mt-2">
						<div class="flex gap-1 items-center">
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
							>
								<rect
									x="0.016"
									y="1.68"
									transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
									width="5.283"
									height="1.466"
								/>
								<rect x="3.161" y="1.604" width="1.683" height="6.375" />
								<rect
									x="2.709"
									y="1.674"
									transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
									width="5.284"
									height="1.465"
								/>
							</svg>
							<div class="text-sm font-semibold">{article.likes}</div>
						</div>
						<div class="flex gap-1 items-center">
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
							>
								<rect
									x="0.016"
									y="1.68"
									transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
									width="5.283"
									height="1.466"
								/>
								<rect x="3.161" y="1.604" width="1.683" height="6.375" />
								<rect
									x="2.709"
									y="1.674"
									transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
									width="5.284"
									height="1.465"
								/>
							</svg>
							<div class="text-sm font-semibold">{article.dislikes}</div>
						</div>
					</div>
				</li>
			{/each}
		{/if}
	</ul>
</div>
