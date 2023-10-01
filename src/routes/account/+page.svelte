<script>
	export let data;
	let isEditingDisplayName = false;
	let errorUpdatingDisplayName = false;

	const handleDisplayNameSaveEdit = async () => {
		console.log(data);
		if (isEditingDisplayName) {
			let { error } = await data.supabase
				.from('user')
				.update({
					display_name: data.userProfile.display_name
				})
				.eq('id', data.user.id);
			if (error) {
				errorUpdatingDisplayName = true;
				console.log(error);
				return;
			}
			errorUpdatingDisplayName = false;
			isEditingDisplayName = false;
			return;
		}
		isEditingDisplayName = true;
	};
</script>

<div class="md:flex md:items-center md:justify-between pt-12">
	<div class="min-w-0 flex-1">
		<h2
			class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
		>
			My Account
		</h2>
	</div>
</div>

<form>
	<div class="space-y-12">
		<div class="border-b border-gray-900/10 pb-12 mt-10">
			<div class="">
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
					>Display name</label
				>
				<div class="mt-2 flex rounded-md shadow-sm">
					<div class="relative flex flex-grow items-stretch focus-within:z-10">
						<input
							type="email"
							name="email"
							id="email"
							class="block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={data.userProfile.display_name}
							readonly={!isEditingDisplayName}
						/>
					</div>
					<button
						type="button"
						on:click={handleDisplayNameSaveEdit}
						class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						{isEditingDisplayName ? 'Save' : 'Edit'}
					</button>
				</div>
				{#if errorUpdatingDisplayName}
					<p class="mt-2 text-sm text-red-600" id="email-error">
						An error has occurred whilst updating your display name, please try again later.
					</p>
				{/if}
			</div>
			<div class="mt-8">
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
				<div class="mt-2 flex rounded-md shadow-sm">
					<div class="relative flex flex-grow items-stretch focus-within:z-10">
						<input
							type="email"
							name="email"
							id="email"
							class="block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={data.user.email}
							readonly
						/>
					</div>
					<button
						type="button"
						class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						Edit
					</button>
				</div>
			</div>
			<div class="mt-8">
				<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
					>Password</label
				>
				<div class="mt-2 flex rounded-md shadow-sm">
					<div class="relative flex flex-grow items-stretch focus-within:z-10">
						<input
							type="password"
							name="password"
							id="password"
							class="block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							value="                   "
							readonly
						/>
					</div>
					<button
						type="button"
						class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						Edit
					</button>
				</div>
			</div>
		</div>
	</div>
</form>
