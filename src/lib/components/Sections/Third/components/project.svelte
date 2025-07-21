<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	export let showTrashHold;
	export let y;

	export let project;
	export let position;

	const onProjectShow = createEventDispatcher();
</script>

{#if showTrashHold < y}
	<section
		transition:scale={{
			duration: 400,
			delay: 0,
			opacity: 0.0,
			start: 0.2,
			end: 0.0,
			easing: quintOut
		}}
		class="{position ? 'flex-row -ml-10' : '-mr-10 flex-row-reverse'} flex items-center z-50"
	>
		<div
			class="flex flex-row items-center w-full gap-2 {position ? 'flex-row' : 'flex-row-reverse'}"
		>
			<div class="w-20 h-20 scale-[0.4] rounded-full bg-zinc-800 dark:bg-slate-100"></div>
			<div class="flex flex-col w-1/2 items-center">
				<h2
					class="lg:text-2xl text-xl font-bold text-center text-zinc-800 dark:text-slate-100 self-startc font-julius"
				>
					{project.title}
				</h2>
				<div class="w-40 my-2 h-0.5 bg-zinc-800 dark:bg-slate-200"></div>
				<div class="mt-2 w-full hidden lg:flex">
					<p class="text-zinc-800 dark:text-slate-100 w-full text-center">{project.preview}</p>
				</div>
				<button
					on:click={() => {
						onProjectShow('onProjectShow', {
							passed_project: project
						});
					}}
					class="dark:text-white underline mt-2 mb-2 {position
						? 'hover:rotate-6'
						: 'hover:-rotate-6'} duration-200">READ MORE</button
				>
			</div>
		</div>
	</section>
{/if}
