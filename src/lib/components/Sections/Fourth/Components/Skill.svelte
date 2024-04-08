<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let offset;
	export let index;
	if (browser) {
		function calculateEffect(i) {
			let result = Math.round(Math.random() * i * 2) * 50;
			result = 'margin-top:' + result + 'px';
			return result;
		}

		offset = calculateEffect(index);
		console.log(offset);
	}
</script>

<div class="rounded-full w-40 h-40 bg-red-200" style="{offset}"></div>
