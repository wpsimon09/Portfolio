<script>
	import Header from './Header.svelte';
	import { browser } from '$app/environment';

	export let bgcolor;
	export let header;

	let isHovered;

	export let y;

	function mouseOn() {
		console.log('hovered on main section');
		isHovered = true;
	}

	function mouseOff() {
		console.log('hovered out of main section');
		isHovered = false;
	}
	if (browser) {
		if (window.screen.width > 500) {
		} else {
			isHovered = true;
		}
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="h-full w-full {bgcolor} hover:p-2 duration-150 mt-20 lg:mt-2"
	on:mouseover={() => mouseOn()}
	on:mouseout={() => mouseOff()}
>
	<Header {y} isHoveredOn={isHovered} headerText={header} />
</div>
