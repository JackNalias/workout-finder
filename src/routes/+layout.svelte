<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import { signOut } from '@auth/sveltekit/client';

	export let data;
</script>

<Navbar isLoggedIn={data.session?.user ? true : false} onSignOut={() => signOut()} />
<main>
	<slot />
</main>
