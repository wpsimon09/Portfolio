<script>
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
        centerLocation = isHoveredOn ? "" : "h-full justify-center"
        margin = isHoveredOn ? "mt-10":""
    }

</script>

<div class="w-full flex flex-col items-center {centerLocation} ">
    <h1 class="text-6xl lg:text-9xl text-{textColor} font-capriola {margin} ">
        {headerText}
    </h1>
    {#if isHoveredOn}
        <p>is between 5 and 10</p>
    {:else}
    {/if}
</div>
