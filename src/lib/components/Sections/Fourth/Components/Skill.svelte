<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let offset;
	export let index;
	function calculateEffect(i) {
		let marginFactor = Math.random() * 3 + 1;
		let margin = Math.round(marginFactor * 10) + 10;
		let marginType = Math.random() < 0.5 ? 'margin-top' : 'margin-bottom';
		return `${marginType}:${margin}px`;
	}

	function calculateScale(i) {
		let scaleFactor = Math.random() * 0.4 + 0.8;
		return `transform:scale(${scaleFactor})`;
	}
	offset = calculateEffect(index);
	let scale = calculateScale(index);
	console.log(offset);
</script>

<div
	class="rounded-full w-40 h-40 bg-red-200 hover:w-60 hover:h-60 duration-200"
	style="{offset};{scale}"
></div>
