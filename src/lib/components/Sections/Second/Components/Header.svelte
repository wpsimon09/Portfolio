<script>
    import AboutMe from "./AboutMe.svelte";
    import Hobbies from "./Hobbies.svelte";
    import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    import {fade} from 'svelte/transition'
    import { blur } from 'svelte/transition';
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
    $:{
        centerLocation = isHoveredOn ? "" : "justify-center"
        margin = isHoveredOn ? "mt-20":""
    }


</script>

<div class="w-full flex h-full flex-col items-center justify-center">
    <h1 class="text-6xl lg:text-9xl text-{textColor} font-julius lg:mt-20 mt-2 ">
        {headerText}
    </h1>

    {#if isHoveredOn && headerText == "About me"}
        <div transition:fade={{ delay: 20, duration: 100 }} class="flex flex-col items-center">
            <AboutMe/>
        </div>
    {:else if isHoveredOn && headerText == "Hobbies"}
    <div transition:scale={{ duration: 400, delay: 20, opacity: 0.1, start: 0.5, easing: quintOut }} class="flex w-full h-full flex-col items-center">
        <Hobbies/>
    </div>
    {/if}
</div>
