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
    <div class="w-full h-full flex-col items-center absolute inset-0">
        <div class=" relative">   
            <ThreeJs />
            <div class="w-full  absolute ">
                <ScrollDownIcon/>
            </div>
        </div>
    </div>
</section>


<style>

</style>