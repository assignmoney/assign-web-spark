<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Notifications from '$lib/components/Notification.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Assign Money Flows</title>
</svelte:head>

{@render children?.()}

<Notifications />
