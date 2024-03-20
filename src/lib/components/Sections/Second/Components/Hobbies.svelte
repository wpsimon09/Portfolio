<script>
   
    let hobbies = [{
        "name": "Playing guitar",
        "icon":""
    }, 
    {
        "name":"Programming",
        "icon": ""
    }, 
    {
        "name":"Rendering",
        "icon": ""
    },
    {
        "name":"Reading",
        "icons":""
    },
    {
        "name":"Gaming",
        "icons":""
    },
    {
        "name":"Guitar playing",
        "icons":""
    }

    
];

let rotation
$:{
   
}
    
</script>

<div class="relative w-full flex flex-col items-center h-full main rotate-[{rotation}deg]">
    {#each hobbies as hobby, i}
    
    <div class="text-slate-800 w-20 h-20 circle absolute flex flex-col items-center bg-white rounded-full">
        {i}
    </div>
    {/each}
</div>

<style>

.circle {
    
    left: calc(50% - 25px);
    top: calc(50% - 25px);
}

.circle:nth-child(1) {
    transform:rotate(60deg) translateX(250px);
}

.circle:nth-child(2) {
    transform: rotate(120deg) translateX(250px);
}

.circle:nth-child(3) {
    transform: rotate(180deg) translateX(250px);
}

.circle:nth-child(4) {
    transform: rotate(240deg) translateX(250px);
}

.circle:nth-child(5) {
    transform: rotate(300deg) translateX(250px);
}

.circle:nth-child(6) {
    transform: rotate(360deg) translateX(250px);
}
</style>

