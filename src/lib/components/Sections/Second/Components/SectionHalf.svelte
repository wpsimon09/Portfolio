<script>
    import Header from "./Header.svelte";

    export let bgcolor;
    export let header;

    let isHovered

    function mouseOn(){
        console.log("hovered on main section");
        isHovered = true;
    }

    function mouseOff(){
        console.log("hovered out of main section");
        isHovered = false;
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="h-full w-full {bgcolor} hover:p-2 duration-150" on:mouseover={()=>mouseOn()} on:mouseout={()=>mouseOff()} >
    <Header isHoveredOn={isHovered} headerText={header}/>
</div>

