<script>
    import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    import { blur } from 'svelte/transition';
    
    export let showTrashHold;
    export let y;

    export let title
    export let description
    export let position;
</script>

{#if showTrashHold < y}
    
<section transition:scale={{ duration: 400, delay: 0, opacity: 0.0, start: 0.2 , easing: quintOut }} class="{position ? "flex-row -ml-10": "-mr-10 flex-row-reverse"} flex items-center z-50 ">
    <div class="flex flex-row items-center  w-full gap-2 {position ? "flex-row": "flex-row-reverse"}">
        <div class="w-20 h-20 scale-[0.4] rounded-full bg-slate-100">
            
        </div>
        <div class="flex flex-col w-1/2  items-center">
            <h2 class="text-2xl font-bold  text-slate-100 self-startc  font-julius">{title}</h2>
            <div class="w-40 my-2 h-0.5 bg-slate-200">
                
            </div>
            <div class="mt-2 w-full">
                <p class="text-slate-100  w-full text-center">{description}</p>
            </div>
            <button class="text-white underline mt-2 mb-2">READ MORE</button>
        </div>
    </div>
</section>
{/if}