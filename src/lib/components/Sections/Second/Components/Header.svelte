<script>
    import AboutMe from "./AboutMe.svelte";
    import Hobbies from "./Hobbies.svelte";
    import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';


    export let headerText;
    export let isHoveredOn;

    export let y;
    let textColor;

    let isOnPhone = true;
    if(browser){
        if(window.screen.width > 500){
            isOnPhone = false;
        }
    }
    
    if (headerText === "About me") {
        textColor = "slate-900";
    } else {
        textColor = "slate-100";
    }

</script>

<div class="w-full flex h-full flex-col items-center ">
    <h1 transition:scale={{ duration: 200, delay: 200, opacity: 0.1, start: 0.5, easing: quintOut }} class="text-6xl lg:text-9xl dark:text-slate-100 text-zinc-800 font-julius lg:mt-20 mt-2 ">
        {headerText}
    </h1>
    {#if isHoveredOn && headerText == "About me"}
        <div transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.2 , easing: quintOut }} class="flex flex-col w-full h-full items-center">
            <AboutMe y={y} trashold={isOnPhone?600:0}/>
        </div>
    {:else if isHoveredOn && headerText == "Hobbies"}
        <div transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.2, easing: quintOut }} class="flex flex-col w-full h-full items-center">
            <Hobbies y={y} trashold={isOnPhone?1370:0 }/>
        </div>
    {/if}
</div>
