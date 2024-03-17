<script>
    import Information from "./SectionComponents/Information.svelte";
    import ThreeJs from "./SectionComponents/ThreeJS.svelte";
    import ThreeJS from "./SectionComponents/ThreeJS.svelte";
    
</script>

<section class="w-full h-full relative dark:bg-slate-950 bg-slate-100">
    <div class="flex flex-col items-center w-full h-full ">
        <div class="z-10 flex flex-row h-full items-center relative">
            <Information/>
        </div>
    </div>  
    <div class="w-full h-full  absolute inset-0">
        <ThreeJs />
    </div>
</section>


<style>

</style>