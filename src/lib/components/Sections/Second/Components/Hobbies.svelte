<script>
    import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

// @ts-nocheck
    export let y;
    export let trashold;

    let hobbies = [{
        "name": "Playing guitar",
        "icon":"icons/guitar.png"
    }, 
    {
        "name":"Programming",
        "icon": "icons/coding.png"
    }, 
    {
        "name":"Rendering",
        "icon": "icons/rendering.png"
    },
    {
        "name":"Reading",
        "icon":"icons/reading.png"
    },
    {
        "name":"Gaming",
        "icon":"icons/gaming.png"
    },
    {
        "name":"Driving",
        "icon":"icons/driving.png"
    },
    {
        "name":"Metal music",
        "icon":"icons/metal.png"
    },
    {
        "name":"Game engines",
        "icon":"icons/game-engine.png"
    }];


</script>

{#if y > trashold}        
    <div transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.2, easing: quintOut }} class="flex flex-col items-center h-full  justify-center realtive z-50">
        <div  class="relative flex flex-col justify-center mr-20 items-center h-full main">
            {#each hobbies as hobby}
                <div class=" absolute duration-100 lg:circle circle-sm flex flex-col items-center bg-zinc-800 shadow-2xl w-16 h-16 lg:w-32 lg:h-32 lg:p-10 p-5 rounded-full justify-center ">
                    <dvi class="">
                        <img class="h-full w-full" src="{hobby.icon}" alt="hobbypng"/>
                    </dvi>
                    <p class="text-slate-200">{hobby.name}</p>
                </div>
            {/each}
        </div> 
    </div>
{/if}

<style>


</style>

