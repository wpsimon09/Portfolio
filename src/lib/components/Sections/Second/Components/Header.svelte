<script>
    import AboutMe from "./AboutMe.svelte";
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
    <h1 class="text-6xl lg:text-9xl text-{textColor} font-capriola lg:mt-20 mt-2  ">
        {headerText}
    </h1>
    {#if isHoveredOn && headerText == "About me"}
    <dvi transition:fade={{ delay: 20, duration: 100 }} class="flex flex-col items-center">
        <AboutMe/>
    </dvi>
    {:else}
    
    {/if}
</div>
