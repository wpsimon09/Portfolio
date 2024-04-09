<script>
	import skills from './skills.json';
	import Skill from './Components/Skill.svelte';
	import { browser } from '$app/environment';
	import { blur } from 'svelte/transition';

	export let y;
	let trashold_in = 0;
	let trahsold_out = 0;
	if(browser){
		if (window.screen.width < 700) {
			//for phone
			
		} else {
			//for desktop
			trashold_in = 1600;
			trahsold_out = 2000;
		}
	}

	function skillSelected(event){
		console.log(event.detail.skill);
	}
</script>

<section class="h-screen w-screen flex flex-col items-center bg-zinc-100 dark:bg-zinc-800">
	<h1 class="text-6xl lg:text-9xl dark:text-slate-100 text-zinc-800 font-julius mt-10">Skills{y}</h1>
		<div class="w-screen h-full flex flex-col items-center justify-center">

			{#if y>trashold_in && y<trahsold_out}	
				<div transition:blur={{ amount: 10 }} class="h-80 w-[99%] gap-1 flex flex-row items-center overflow-x-auto">
					{#each skills as skill, i}
						<div>
							<Skill on:skillClicked={skillSelected(event)} index={i} _skill={skill} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	
</section>
