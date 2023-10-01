<script>
	export let data;
</script>

<div class="flex items-center justify-between mb-10 pt-12">
	<div class="min-w-0 flex-1">
		<h2
			class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
		>
			My Workouts
		</h2>
	</div>
	<div class="flex ml-4 mt-0">
		<a
			href="/account/workouts/post-a-workout"
			class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Post a Workout</a
		>
	</div>
</div>

<div class="">
	<div class="">
		<div class="mt-2 flex rounded-md shadow-sm">
			<div class="relative flex flex-grow items-stretch focus-within:z-10">
				<input
					type="email"
					name="email"
					id="email"
					class="block w-full rounded-none rounded-l-md border-0 py-3 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl"
					placeholder="Search"
				/>
			</div>
			<button
				type="button"
				class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
			>
				Search
			</button>
		</div>
	</div>
	<ul role="list" class="mx-auto divide-y divide-gray-100 mt-1">
		{#if data.workouts}
			{#each data.workouts as article}
				<li class="relative py-5 hover:bg-gray-50">
					<div class="">
						<div class=" flex justify-between gap-x-6">
							<div class="flex min-w-0 gap-x-4">
								<div class="min-w-0 flex-auto">
									<p class="text-lg font-semibold leading-6 text-gray-900">
										<span class="absolute inset-x-0 -top-px bottom-0" />
										{article.title}
									</p>
									<p class="mt-1 flex text-md leading-5 text-gray-500">
										<span class="relative">{article.excerpt}</span>
									</p>
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
											<div class="text-sm font-semibold">10k</div>
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
											<div class="text-sm font-semibold">10k</div>
										</div>
										<div class="flex gap-1 items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="800px"
												height="800px"
												viewBox="0 0 32 32"
												version="1.1"
												class="w-3.5 h-3.5"
											>
												<g
													id="Page-1"
													stroke="black"
													stroke-width="2"
													fill="none"
													fill-rule="evenodd"
												>
													<g
														id="Icon-Set"
														transform="translate(-360.000000, -255.000000)"
														fill="#000000"
													>
														<path
															d="M390,277 C390,278.463 388.473,280 387,280 L379,280 L376,284 L373,280 L365,280 C363.527,280 362,278.463 362,277 L362,260 C362,258.537 363.527,257 365,257 L387,257 C388.473,257 390,258.537 390,260 L390,277 L390,277 Z M386.667,255 L365.333,255 C362.388,255 360,257.371 360,260.297 L360,277.187 C360,280.111 362.055,282 365,282 L371.639,282 L376,287.001 L380.361,282 L387,282 C389.945,282 392,280.111 392,277.187 L392,260.297 C392,257.371 389.612,255 386.667,255 L386.667,255 Z"
															id="comment-5"
														/>
													</g>
												</g>
											</svg>
											<div class="text-sm font-semibold">10k</div>
										</div>
									</div>
								</div>
							</div>
							<div class="flex shrink-0 items-center gap-x-4 z-10">
								<div class="flex md:flex-row flex-col gap-4">
									<button
										type="button"
										class="rounded w-full bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
										>Edit</button
									>
									<button
										type="button"
										class="rounded bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>View</button
									>
								</div>
							</div>
						</div>
					</div>
				</li>
			{/each}
		{/if}
	</ul>
</div>
