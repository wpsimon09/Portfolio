<script>
    export let headerText;
    export let isHoveredOn;

    let textColor;
    
    if (headerText === "About me") {
        textColor = "slate-900";
    } else {
        textColor = "slate-100";
    }
    
    let centerLocation = isHoveredOn ? "" : "justify-center"

</script>

<div class="w-full h-full flex flex-col items-center {centerLocation} ">
    <h1 class="text-6xl lg:text-9xl text-{textColor} font-capriola ">
        {headerText}
    </h1>
    {#if isHoveredOn}
        <p>is between 5 and 10</p>
    {:else}
    {/if}
</div>
