<script>
	export let project;
	import { fly, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	transition:scale={{ delay: 10, duration: 500, easing: quintOut, axis: 'y' }}
	on:click
	class=" w-screen h-screen fixed flex flex-col items-center backdrop-blur-xl bg-slate-200 dark:bg-zinc-600 justify-center bg-opacity-15 z-[97] shadow-2xl"
>
	<div
		class="w-[90%] lg:w-1/2 h-[85%]  flex flex-col items-center bg-slate-100 dark:bg-zinc-800 shadow-2xl rounded-xl z-[98]"
	>
		<div class="w-full flex flex-row-reverse">
			<button
				class="dark:text-slate-100 text-zinc-900 text-3xl p-3 hover:text-red-500 duration-300 mt-5 mr-2 lg:mr-10"
				on:click>x</button
			>
		</div>
		<div class="w-full h-full flex items-center -mt-6 flex-col">

			<h1
				class="text-zinc-800 dark:text-slate-100 w-full text-center font-bold text-3xl font-julius mt-10"
			>
				{project.title}
			</h1>
			<div class="h-0.5 bg-zinc-800 text-slate-100 dark:bg-slate-50 w-60 lg:w-80 mt-4 dark:text-zinc-800">
				s
			</div>
			<div class="flex flex-col items-center w-[90%] h-[70%] mt-5 overflow-y-auto ">
				<div class="flex flex-row gap-10 mt-4 items-center justify-between">
					<a href={project.link} target="_blank">
						<img
							class="invert dark:invert-0 w-10 h-10 hover:scale-125 duration-150"
							alt="github"
							src="icons/gh-w.png"
						/>
					</a>
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
				<p class="mt-10 text-zinc-800 dark:text-white w-[90%] lg:w-2/3 text-lg lg:text-2xl text-justify">
					{project.description}
				</p>
	
				<h2 class="dark:text-white text-lg my-5 lg:text-xl">Used tech:</h2>
				<div
					class="rounded-md bg-opacity-10 shadow-2xl p-2 lg:h-20 lg:py-10 w-full lg:w-1/2 mb-5 justify-center overflow-x-auto overflow-y-hidden flex bg-zinc-500 flex-row items-center"
				>
					{#each project.tech_stack as used_tech}
						<p class="dark:text-slate-100 text-zinc-900 text-md lg:text-lg px-2">
							{used_tech},
						</p>
					{/each}
				</div>
				<div class="flex flex-col items-center h-full justify-center mb-10">
					<div class="flex flex-col items-center h-[200px] lg:h-[400px] lg:p-10">
						<img class="w-full h-full rounded-lg" src={project.image} alt="projectimage" />
					</div>
				</div>
		</div>
		</div>
	</div>
</div>
