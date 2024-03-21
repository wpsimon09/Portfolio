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

    function onHover(hobbyIndex){
        if (hobbyIndex >= 0 && hobbyIndex < hobbies.length) {
            hobbySelected = hobbies[hobbyIndex].name;
        } else {
            hobbySelected = "";
        }
    }

</script>

<div class="flex flex-col items-center h-full justify-center realtive z-50">
    <div  class="relative flex flex-col justify-center mr-20 items-center h-full main">
        {#each hobbies as hobby, i}
        <div on:mouseenter={()=>onHover(i)} on:mouseleave={()=>onHover(10)}  class="p-5 hover:p-[3px] duration-100 circle absolute flex flex-col items-center bg-slate-200 shadow-2xl w-32 h-32 rounded-full">
            <img class="w-full h-full" src="{hobby.icon}" alt="hobbypng"/>
        </div>
        {/each}
    </div>
    <h1 class="text-white text-3xl text-center absolute w-full"> 
        {hobbySelected}
    </h1>
</div>

<style>

.circle {
    left: calc(50% - 25px);
    top: calc(50% - 25px);
}
.circle:nth-child(1) {
        transform: rotate(45deg) translateX(240px) rotate(-45deg);
    }

    .circle:nth-child(2) {
        transform: rotate(90deg) translateX(240px) rotate(-90deg);
    }

    .circle:nth-child(3) {
        transform: rotate(135deg) translateX(240px) rotate(-135deg);
    }

    .circle:nth-child(4) {
        transform: rotate(180deg) translateX(240px) rotate(-180deg);
    }

    .circle:nth-child(5) {
        transform: rotate(225deg) translateX(240px) rotate(-225deg);
    }

    .circle:nth-child(6) {
        transform: rotate(270deg) translateX(240px) rotate(-270deg);
    }

    .circle:nth-child(7) {
        transform: rotate(315deg) translateX(240px) rotate(-315deg);
    }

    .circle:nth-child(8) {
        transform: rotate(360deg) translateX(240px) rotate(-360deg);
    }
</style>

