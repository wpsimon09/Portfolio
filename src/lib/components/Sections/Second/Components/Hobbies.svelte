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
            <div class=" absolute duration-100 lg:circle circle-sm flex flex-col items-center bg-zinc-800 shadow-2xl w-32 h-32  rounded-full justify-center ">
                <dvi class="">
                    <img class="w-16 h-16" src="{hobby.icon}" alt="hobbypng"/>
                </dvi>
                <p class="text-slate-200">{hobby.name}</p>
            </div>
        {/each}
    </div>
 
</div>

<style>


</style>

