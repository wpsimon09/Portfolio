<script>
    import Header from "./Header.svelte";

    export let bgcolor;
    export let header;

    let isHovered

    function mouseOn(){
        isHovered = true;
    }

    function mouseOff(){
        isHovered = false;
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="w-full h-full bg-{bgcolor}" on:mouseover={mouseOn} on:mouseout={mouseOff} >
    <Header isHoveredOn={isHovered} headerText={header}/>
</div>

