<script>
// @ts-nocheck

   
    let hobbies = [{
        "name": "Playing guitar",
        "icon":"/guitar.png"
    }, 
    {
        "name":"Programming",
        "icon": "/coding.png"
    }, 
    {
        "name":"Rendering",
        "icon": "/rendering.png"
    },
    {
        "name":"Reading",
        "icon":"/reading.png"
    },
    {
        "name":"Gaming",
        "icon":"/gaming.png"
    },
    {
        "name":"Driving",
        "icon":"/driving.png"
    },
    {
        "name":"Metal music",
        "icon":"/metal.png"
    },
    {
        "name":"Game engines",
        "icon":"/game-engine.png"
    }];

    let hobbySelected = "hello";

    function onHover(hobby){
        console.log(hobby)
        if(hobby != undefined){
            hobbySelected = hobby.name;
        }
        else{
            hobbySelected = "";
        }
    }

</script>

<div class="flex flex-col items-center h-full justify-center w-full">
    <div class="relative flex flex-col justify-center mr-20 items-center h-full main ">
        {#each hobbies as hobby, i}
        
        <div on:mouseenter={onHover(hobby)} on:mouseleave={onHover(undefined)} class=" w-28 h-28 circle absolute flex flex-col items-center bg-slate-200 shadow-2xl rounded-full">
            <div class="rotate-0 w-full h-full flex flex-col justify-center items-center">
                <img class="w-20 h-20" src="{hobby.icon}" alt="hobbypng"/>
            </div>
        </div>
        {/each}
    </div>
    <h1 class="text-slate-100 text-3xl text-center absolute "> 
        {hobbySelected}
    </h1>
</div>

<style>

.circle {
    left: calc(50% - 25px);
    top: calc(50% - 25px);
}

.circle:nth-child(1) {
    transform:rotate(45deg) translateX(240px);
}

.circle:nth-child(2) {
    transform: rotate(90deg) translateX(240px);
}

.circle:nth-child(3) {
    transform: rotate(135deg) translateX(240px);
}

.circle:nth-child(4) {
    transform: rotate(180deg) translateX(240px);
}

.circle:nth-child(5) {
    transform: rotate(225deg) translateX(240px);
}

.circle:nth-child(6) {
    transform: rotate(270deg) translateX(240px);
}

.circle:nth-child(7) {
    transform: rotate(315deg) translateX(240px);
}
.circle:nth-child(8) {
    transform: rotate(360deg) translateX(240px);
}
</style>

