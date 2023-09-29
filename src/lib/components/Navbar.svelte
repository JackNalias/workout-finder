<script>
	import { page } from '$app/stores';

	let open = false;
	let isLoggedIn = false;
	const navItems = [
		{
			text: 'Search',
			url: '/'
		},
		{
			text: 'Contact',
			url: '/contact'
		}
	];

	const toggleMenu = () => (open = !open);
</script>

<nav class="bg-white shadow">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<a class="flex flex-shrink-0 items-center" href="/">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
				</a>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					{#each navItems as navItem}
						<a
							href={navItem.url}
							class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium{$page.url
								.pathname === navItem.url
								? ' border-indigo-500 text-gray-900'
								: ' border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
							>{navItem.text}</a
						>
					{/each}
				</div>
			</div>
			<div class="hidden sm:ml-6 sm:flex sm:items-center">
				{#if !$page.data.session?.user}
					<div class="lg:flex lg:flex-1 lg:justify-end">
						<a
							href="/login"
							class="flex items-center gap-1 px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 group"
							>Log in <svg
								xmlns="http://www.w3.org/2000/svg"
								width="800px"
								height="800px"
								viewBox="0 0 24 24"
								fill="none"
								class="w-4 h-4 text-sm font-medium stroke-gray-500 group-hover:stroke-gray-700"
							>
								<path
									d="M5 12H19M19 12L13 6M19 12L13 18"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg></a
						>
					</div>
				{:else}
					<button
						type="button"
						class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						<span class="absolute -inset-1.5" />
						<span class="sr-only">View notifications</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
							/>
						</svg>
					</button>

					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								type="button"
								class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
								on:click={toggleMenu}
							>
								<span class="absolute -inset-1.5" />
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>

						<div
							class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
              {open
								? 'transition ease-out duration-200 transform opacity-100 scale-100'
								: 'transform opacity-0 scale-95'}"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<!-- Active: "bg-gray-100", Not Active: "" -->
							<a
								href="/account"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0">Account</a
							>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-1">Settings</a
							>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-2">Sign out</a
							>
						</div>
					</div>
				{/if}
			</div>
			<div class="-mr-2 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={toggleMenu}
				>
					<span class="absolute -inset-0.5" />
					<span class="sr-only">Open main menu</span>
					<!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
					<svg
						class="h-6 w-6 {open ? 'hidden' : 'block'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
					<svg
						class="h-6 w-6 {open ? 'block' : 'hidden'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if open}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 pb-3 pt-2">
				<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
				{#each navItems as navItem}
					<a
						href={navItem.url}
						class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium {$page.url.pathname ===
						navItem.url
							? 'bg-indigo-50 border-indigo-500 text-indigo-700'
							: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}"
						>{navItem.text}</a
					>
				{/each}
				{#if !isLoggedIn}
					<a
						href="/login"
						class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium {$page.url.pathname ===
						'/login'
							? 'bg-indigo-50 border-indigo-500 text-indigo-700'
							: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}"
						>Login</a
					>
				{/if}
			</div>
			{#if isLoggedIn}
				<div class="border-t border-gray-200 pb-3 pt-4">
					<div class="flex items-center px-4">
						<div class="flex-shrink-0">
							<img
								class="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</div>
						<div class="ml-3">
							<div class="text-base font-medium text-gray-800">Tom Cook</div>
							<div class="text-sm font-medium text-gray-500">tom@example.com</div>
						</div>
						<button
							type="button"
							class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<span class="absolute -inset-1.5" />
							<span class="sr-only">View notifications</span>
							<svg
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
								/>
							</svg>
						</button>
					</div>
					<div class="mt-3 space-y-1">
						<a
							href="/account"
							class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
							>Your Account</a
						>
						<a
							href="#"
							class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
							>Settings</a
						>
						<a
							href="#"
							class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
							>Sign out</a
						>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</nav>
