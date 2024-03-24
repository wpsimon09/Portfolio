<script>
    export let p_title  
    export let p_description

    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div transition:slide={{ delay: 10, duration: 500, easing: quintOut, axis: 'y' }}  on:click class=" w-screen h-screen fixed flex flex-col items-center backdrop-blur-xl justify-center bg-opacity-5  z-[98]">
    <div class="w-1/2 h-1/2 flex flex-col items-center bg-zinc-800 border-1-white rounded-xl z-[99]">
        <h1 class="text-slate-100  w-full text-center text-3xl font-julius mt-10">{p_title}</h1>
       <dvi class="flex flex-col items-center w-full h-full justify-between">
           <p class="text-white w-2/3">
               <br/>
               {p_description}
           </p>
           <button class="bg-slate-200 text-zinc-900 p-3 rounded-2xl mb-10" on:click>Got it, cool, anyway</button>
       </dvi>
    </div>
</div>
