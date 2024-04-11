<script>
    export let skill;
</script>

<div class="absolute text-center text-zinc-800 dark:text-white  justify-center mt-10 w-full flex flex-col items-center">
    <h1 class="text-2xl font-julius">{skill.name}</h1>
    <div class="mt-2 w-80 lg:w-96 h-0.5 bg-zinc-800 dark:bg-slate-100"></div>
    <p class="mt-2">{skill.description}</p>
    <button on:click class="mt-2 text-red-400  hover:text-xl duration-100">Hide</button>
</div>

