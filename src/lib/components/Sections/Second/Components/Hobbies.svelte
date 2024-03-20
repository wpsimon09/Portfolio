<script>
   
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
        "icons":"/reading.png"
    },
    {
        "name":"Gaming",
        "icons":"/gaming.png"
    },
    {
        "name":"Driving",
        "icons":"/driving.png"
    },
    {
        "name":"Metal music",
        "icons":"/metal.png"
    },
    {
        "name":"Game engines",
        "icons":"/game-engine.png"
    }



    
];

let rotation
$:{
   
}
    
</script>

<div class="relative w-full flex flex-col items-center h-full main rotate-[{rotation}deg]">
    {#each hobbies as hobby, i}
    
    <div class="text-slate-100   w-20 h-20 circle absolute flex flex-col items-centerrounded-full">
        <img class="w-full h-full " src="{hobby.icon}" alt="hobbypng"/>
    </div>
    {/each}
</div>

<style>

.circle {
    
    left: calc(50% - 25px);
    top: calc(50% - 25px);
}

.circle:nth-child(1) {
    transform:rotate(45deg) translateX(250px);
}

.circle:nth-child(2) {
    transform: rotate(90deg) translateX(250px);
}

.circle:nth-child(3) {
    transform: rotate(135deg) translateX(250px);
}

.circle:nth-child(4) {
    transform: rotate(180deg) translateX(250px);
}

.circle:nth-child(5) {
    transform: rotate(225deg) translateX(250px);
}

.circle:nth-child(6) {
    transform: rotate(270deg) translateX(250px);
}

.circle:nth-child(7) {
    transform: rotate(315deg) translateX(250px);
}
.circle:nth-child(8) {
    transform: rotate(360deg) translateX(250px);
}
</style>

