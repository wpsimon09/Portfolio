<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// @ts-nocheck
	export let y;
	export let trashold;
	export let scrollOutThrahsold;

	let hobbies = [
		{
			name: 'Playing guitar',
			icon: 'icons/guitar.png'
		},
		{
			name: 'Programming',
			icon: 'icons/coding.png'
		},
		{
			name: 'Rendering',
			icon: 'icons/rendering.png'
		},
		{
			name: 'Reading',
			icon: 'icons/reading.png'
		},
		{
			name: 'Gaming',
			icon: 'icons/gaming.png'
		},
		{
			name: 'Driving',
			icon: 'icons/driving.png'
		},
		{
			name: 'Metal music',
			icon: 'icons/metal.png'
		},
		{
			name: 'Game engines',
			icon: 'icons/game-engine.png'
		}
	];
</script>

<div
	transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.2, easing: quintOut }}
	class="flex flex-col items-center h-full w-full justify-center realtive z-50"
>
	<div class="relative flex flex-col justify-center mr-20 -mt-20 items-center w-full h-full">
		{#each hobbies as hobby}
			<div
				class=" absolute duration-100 lg:circle circle-sm flex ml-6 flex-col items-center w-20 h-20 lg:w-32 lg:h-32 rounded-full justify-center"
			>
				<div
					class="w-full h-full flex flex-col items-center rounded-full bg-zinc-700 p-4 lg:p-5 shadow-2xl"
				>
					<img class="h-full w-full" src={hobby.icon} alt="hobbypng" />
				</div>
				<p class="dark:text-slate-200 text-zinc-800 w-full text-center mt-2">{hobby.name}</p>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
