<script>
	import skills from './skills.json';
	import Skill from './Components/Skill.svelte';
	
</script>

<section class="h-screen w-screen flex flex-col items-center bg-zinc-100 dark:bg-zinc-800">
	<h1 class="text-6xl lg:text-9xl dark:text-slate-100 text-zinc-800 font-julius mt-10">Skills</h1>
	<div class="w-screen h-full flex flex-col items-center justify-center">
		<div class="h-80 w-[99%] flex flex-row items-center overflow-x-auto">
			{#each skills as skill, i}
				<div>
					<Skill index={i}/>
				</div>
			{/each}
		</div>
	</div>
</section>
