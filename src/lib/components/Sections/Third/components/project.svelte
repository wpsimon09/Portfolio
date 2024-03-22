<script>
    
    export let title
    export let description
    export let position;
</script>

<section class="{position ? "flex-row -ml-10": "-mr-10 flex-row-reverse"} flex items-center  z-50 ">
    <div class="flex flex-row items-center  duration-75 w-full gap-2 {position ? "flex-row": "flex-row-reverse"}">
        <div class="w-20 h-20 scale-[0.4] rounded-full bg-slate-100">
            
        </div>
        <div class="flex flex-col w-1/2  items-center">
            <h2 class="text-2xl font-bold  text-slate-100 self-startc  font-julius">{title}</h2>
            <div class="w-40 my-2 h-0.5 bg-slate-200">
        
            </div>
                <div class="mt-2">
                    <p class="text-slate-100 text-clip text-center">{description}</p>
                </div>
                <button class="text-white underline mt-2 mb-2">READ MORE</button>
            </div>
        </div>
</section>