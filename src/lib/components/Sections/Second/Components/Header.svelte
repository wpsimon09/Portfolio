<script>
    import AboutMe from "./AboutMe.svelte";
    import Hobbies from "./Hobbies.svelte";
    import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    
    export let headerText;
    export let isHoveredOn;


    let textColor;
    
    if (headerText === "About me") {
        textColor = "slate-900";
    } else {
        textColor = "slate-100";
    }
    let centerLocation;
    let margin;

</script>

<div class="w-full flex h-full flex-col items-center ">
    <h1 transition:scale={{ duration: 200, delay: 200, opacity: 0.1, start: 0.5, easing: quintOut }} class="text-6xl lg:text-9xl text-{textColor} font-julius lg:mt-20 mt-2 ">
        {headerText}
    </h1>
    {#if isHoveredOn && headerText == "About me"}
        <div transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.5, easing: quintOut }} class="flex flex-col w-full h-full items-center">
            <AboutMe/>
        </div>
    {:else if isHoveredOn && headerText == "Hobbies"}
        <div transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.5, easing: quintOut }} class="flex flex-col items-center w-full h-full">
            <Hobbies/>
        </div>
    {/if}
</div>
