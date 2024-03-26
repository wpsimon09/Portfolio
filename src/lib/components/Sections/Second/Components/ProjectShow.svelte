<script>
    export let project;
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    transition:slide={{ delay: 10, duration: 500, easing: quintOut, axis: "y" }}
    on:click
    class=" w-screen h-screen fixed flex flex-col items-center backdrop-blur-xl justify-center bg-opacity-5 z-[98]"
>
    <div
        class="w-full lg:w-1/2 flex flex-col border border-white items-center bg-zinc-800 border-1-white rounded-xl z-[99]"
    >
        <h1
            class="text-slate-100 w-full text-center text-3xl font-julius mt-10"
        >
            {project.title}
        </h1>
        <div class="h-0.5 bg-slate-50 w-80 mt-4 font-bold"></div>
        <dvi class="flex flex-col items-center  w-full h-full">
            <p class="text-white w-2/3">
                <br />
                {project.description}
            </p>
            <div class="flex flex-col items-center h-full justify-center">
                <div class="flex flex-col items-center h-[300px] lg:h-[400px] p-10">
                    <img
                        class="w-full h-full rounded-lg"
                        src={project.image}
                        alt="project image "
                    />
                </div>
                <div class="flex flex-row gap-10 items-center justify-between">
                    <a href={project.link} target="_blank">
                        <img class="w-10 h-10 hover:scale-125 duration-150" alt="github" src="gh-w.png"/>
                    </a>
                    {#if project.link_deployement != ""}    
                    <a href={project.link_deployement} target="_blank">
                        <img class="w-10 h-10 hover:scale-125 duration-150" alt ="link" src="link.png"/>
                    </a>
                    {/if}
                </div>
            </div>
            <button
                class="bg-slate-200 text-zinc-900 p-3 hover:scale-110 duration-300 rounded-2xl my-10"
                on:click>Got it, cool, anyway</button
            >
        </dvi>
    </div>
</div>
