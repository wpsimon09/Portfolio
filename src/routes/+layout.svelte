<script>
	import "../app.css";
	import Footer from "$lib/components/Sections/Footer/Footer.svelte";

	export const prerender = true;
</script>

<div class="flex flex-col w-screen h-screen bg-zinc-100 dark:bg-zinc-900">
	<main class="w-full h-full relative">
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
</style>
