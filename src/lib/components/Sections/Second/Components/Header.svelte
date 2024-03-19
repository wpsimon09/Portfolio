<script>
    export let headerText;
    export let isHoveredOn ;

    let textColor;
    if (headerText === "About me") {
        textColor = "slate-950";
    } else {
        textColor = "slate-100";
    }
</script>

<div class="w-full h-full flex flex-col items-center justify-center">
    <h1 class="text-6xl lg:text-9xl text-{textColor} font-capriola">
        {headerText}
    </h1>
</div>
