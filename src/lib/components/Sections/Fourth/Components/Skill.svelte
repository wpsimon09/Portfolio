<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import {createEventDispatcher} from 'svelte';

	export let _skill;

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

  	const dispatch = createEventDispatcher();

    	
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<button
	class="rounded-full p-5 w-40 h-40 flex flex-col items-center justify-center shadow-2xl hover:w-48 hover:h-48 hover:bg-zinc-100 bg-slate-200  duration-150"
	style="{offset};{scale}"
	on:click={()=>{
		dispatch('skillClicked',{
			skill:_skill
		});
	}}
>
<div class="h-30 w-30 flex flex-col items-center justify-center rounded-full">
	<img class="h-30 w-30 object-scale-down rounded-full" src={_skill.src} alt="skill"/>
</div>
</button>
