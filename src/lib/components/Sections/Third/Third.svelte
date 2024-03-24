<script>
    import { onMount } from "svelte";
    import Project from "./components/project.svelte";
    import projects from "./components/projects.json";

    let trasholds = []

    for(let i = 0; i< projects.length; i++){
        trasholds.push(1140 + (250 * i))
    }

    console.log(trasholds);
    export let y
</script>


<section class="w-full h-full relative items-center flex flex-col my-10">
    <h1 class="text-2xl text-white"> {y} </h1>
    <div class="h-full w-full bg-zinc-900 relative items-center flex flex-col gap-20">
        <div class="w-2 h-2 rounded-full bg-slate-50 z-10"></div>
        <div class="bg-slate-50 w-0.5 h-full absolute z-30"></div>
        {#each projects as project, i}
        <div  class="w-full flex-row {i % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} flex z-20">
            <div class="w-1/2"/>
                <div class="w-1/2 z-40">
                    <Project
                    showTrashHold = {trasholds[i]}
                    y = {y}
                    position={i % 2 == 0}   
                    title={project.title}
                    description={project.description}
                    />
                </div>
        </div>
        {/each}
    </div>
</section>

