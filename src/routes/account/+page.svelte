<script>
	import { page } from '$app/stores';

	export let data;
	let isEditingDisplayName = false;
	let errorUpdatingDisplayName = false;
	let isEditingEmail = false;
	let emailUpdateTriggered = false;
	let emailUpdateError = '';

	const handleDisplayNameSaveEdit = async () => {};

	const handleEmailEdit = async () => {};
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
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={data.user.name}
							readonly={!isEditingDisplayName}
						/>
					</div>
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
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={data.user.email}
							readonly={!isEditingEmail}
						/>
					</div>
				</div>
				{#if emailUpdateError.length > 0}
					<p class="mt-2 text-sm text-red-600">{emailUpdateError}</p>
				{:else if $page.url.searchParams.get('message')}
					<p class="mt-2 text-sm text-blue-600">
						{$page.url.searchParams.get('message')}
					</p>
				{:else if emailUpdateTriggered}
					<p class="mt-2 text-sm text-blue-600">
						To confirm your email change, follow the magic link sent to both your old and new email.
					</p>
				{/if}
			</div>
		</div>
	</div>
</form>
