<script>
	import { onMount } from 'svelte';
	import Project from './components/project.svelte';
	import projects from './components/projects.json';
	import { browser } from '$app/environment';

	export let y;
	let trasholds = [];
	if (browser) {
		for (let i = 0; i < projects.length; i++) {
			if (window.screen.width < 700) {
				//for phone
				trasholds.push(2890 + 250 * i);
			} else {
				//for desktop
				trasholds.push(2140 + 250 * i);
			}
			console.log(window.screen.width);
		}

		console.log(trasholds);
	}
</script>


<section class="w-full h-full relative items-center flex flex-col my-10">
	<h1 class="text-6xl lg:text-9xl dark:text-slate-100 text-zinc-800 font-julius  mb-10 ">My projects</h1>
	<div class="h-full w-full bg-zinc-100 dark:bg-zinc-800 relative items-center flex flex-col gap-20">
		<div class="w-2 h-2 rounded-full bg-zinc-800 dark:bg-slate-50 z-10"></div>
		<div class="bg-zinc-800 dark:bg-slate-50 w-0.5 h-full absolute z-30"></div>
		{#each projects as project, i}
			<div class="w-full flex-row {i % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} flex z-20">
				<div class="w-1/2" />
				<div class="w-1/2 z-40">
					<Project
						showTrashHold={trasholds[i]}
						{y}
						position={i % 2 == 0}
						{project}
						on:onProjectShow
					/>
				</div>
			</div>
		{/each}
	</div>
</section>
