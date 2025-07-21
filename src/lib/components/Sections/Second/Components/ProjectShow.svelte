<script>
	export let project;
	import { fly, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Carousel from 'svelte-carousel';

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		console.log(color);
		return color;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	transition:scale={{ delay: 10, duration: 500, easing: quintOut, axis: 'y' }}
	class=" w-screen h-screen fixed flex flex-col items-center backdrop-blur-xl lg:justify-center bg-opacity-15 z-[99] shadow-2xl"
>
	<div
		class="w-full lg:w-1/2 h-[85%] flex flex-col items-center bg-slate-100 dark:bg-zinc-800 shadow-2xl rounded-xl z-[98]"
	>
		<div class="w-full h-full flex items-center flex-col">
			<div
				class="flex flex-col items-center w-full mx-2 lg:py-0 lg:w-[90%] p-2 mt-5 overflow-y-auto"
			>
				<h1
					class="text-zinc-800 dark:text-slate-100 w-full text-center font-bold text-3xl font-julius mt-10"
				>
					{project.title}
				</h1>

				<div
					class="h-0.5 bg-zinc-800 text-slate-100 dark:bg-slate-50 w-full lg:w-full mt-4 dark:text-zinc-800"
				></div>

				<a class="my-4" href={project.link} target="_blank">
					<img
						class="invert dark:invert-0 w-10 h-10 hover:scale-125 duration-150"
						alt="github"
						src="icons/gh-w.png"
					/>
				</a>

				<Carousel>
					{#each project.image as img}
						<div class="flex flex-col items-center h-[200px] lg:h-[400px] p-2">
							<img class="w-full h-full rounded-lg" src={img} alt="projectimage" />
						</div>
					{/each}
				</Carousel>

				<div class="flex flex-row gap-10 mt-4 items-center justify-between">
					{#if project.link_deployement != ''}
						<a href={project.link_deployement} target="_blank">
							<img
								class="invert dark:invert-0 w-10 h-10 hover:scale-125 duration-150"
								alt="link"
								src="icons/link.png"
							/>
						</a>
					{/if}
				</div>
				<p
					class="mt-10 texta-zinc-800 dark:text-white w-full lg:w-2/3 text-lg lg:text-2xl text-justify"
				>
					{project.description}
				</p>

				<h2 class="dark:text-white text-lg my-5 lg:text-xl">Used tech:</h2>
				<div class="rounded-md bg-opacity-10 p-4 w-full lg:w-[80%] mb-5">
					<div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
						{#each project.tech_stack as used_tech}
							<div
								class="hover:scale-105 duration-300 text-zinc-900 text-md lg:text-lg text-center bg-transparent border border-black shadow-lg dark:text-slate-50 dark:border-white lg:w-40 h-10 my-5 rounded-lg p-2"
							>
								{used_tech}
							</div>
						{/each}
					</div>
				</div>
			</div>
			<button
				on:click
				class="bg-transparent border hover:text-red-500 hover:border-red-500 duration-200 border-black shadow-lg dark:text-slate-50 dark:border-white w-40 h-10 my-5 rounded-lg p-2"
				>Close</button
			>
		</div>
	</div>
</div>
