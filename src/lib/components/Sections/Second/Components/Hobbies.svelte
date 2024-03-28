<script>
// @ts-nocheck

   
    let hobbies = [{
        "name": "Playing guitar",
        "icon":"icons/guitar.png"
    }, 
    {
        "name":"Programming",
        "icon": "icons/coding.png"
    }, 
    {
        "name":"Rendering",
        "icon": "icons/rendering.png"
    },
    {
        "name":"Reading",
        "icon":"icons/reading.png"
    },
    {
        "name":"Gaming",
        "icon":"icons/gaming.png"
    },
    {
        "name":"Driving",
        "icon":"icons/driving.png"
    },
    {
        "name":"Metal music",
        "icon":"icons/metal.png"
    },
    {
        "name":"Game engines",
        "icon":"icons/game-engine.png"
    }];


</script>

<div class="flex flex-col items-center h-full justify-center realtive z-50">
    <div  class="relative flex flex-col justify-center mr-20 items-center h-full main">
        {#each hobbies as hobby}
            <div class=" absolute duration-100 circle flex flex-col items-center bg-zinc-800 shadow-2xl w-32 h-32  rounded-full justify-center">
                <dvi class="">
                    <img class="w-16 h-16" src="{hobby.icon}" alt="hobbypng"/>
                </dvi>
                <p class="text-slate-200">{hobby.name}</p>
            </div>
        {/each}
    </div>
 
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

.circle-sm {
    left: calc(50% - 25px);
    top: calc(50% - 25px);
}
.circle-sm:nth-child(1) {
        transform: rotate(45deg) translateX(100px) rotate(-45deg);
    }

    .circle-sm:nth-child(2) {
        transform: rotate(90deg) translateX(100px) rotate(-90deg);
    }

    .circle-sm:nth-child(3) {
        transform: rotate(135deg) translateX(100px) rotate(-135deg);
    }

    .circle-sm:nth-child(4) {
        transform: rotate(180deg) translateX(100px) rotate(-180deg);
    }

    .circle-sm:nth-child(5) {
        transform: rotate(225deg) translateX(100px) rotate(-225deg);
    }

    .circle-sm:nth-child(6) {
        transform: rotate(270deg) translateX(100px) rotate(-270deg);
    }

    .circle-sm:nth-child(7) {
        transform: rotate(315deg) translateX(100px) rotate(-315deg);
    }

    .circle-sm:nth-child(8) {
        transform: rotate(360deg) translateX(100px) rotate(-360deg);
    }

</style>

