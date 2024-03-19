<script>
    import Information from "./SectionComponents/Information.svelte";
    import ThreeJs from "./SectionComponents/ThreeJS.svelte";
    import ThreeJS from "./SectionComponents/ThreeJS.svelte";
    import TopBar from "./SectionComponents/TopBar.svelte";
    import ScrollDownIcon from "./SectionComponents/ScrollDownIcon.svelte";
</script>

<section class="w-full h-full relative dark:bg-slate-950 bg-slate-100">
    <div class="flex flex-col items-center w-full h-full ">
        <div class="w-full z-20">
            <TopBar/>
        </div>
        <div class="z-10 flex flex-row h-full items-center relative">
            <Information/>
        </div>
    </div>  
    <div class="w-full h-full flex-col-reverse items-center absolute inset-0">
        <div class="flex flex-col-reverse items-center relative ">   
            <div class="w-full  absolute mb-10">
                <ScrollDownIcon/>
            </div>
            <ThreeJs />
        </div>
    </div>
</section>


<style>

</style>