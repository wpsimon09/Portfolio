<script>
    import SectionHalf from "./Components/SectionHalf.svelte";
</script>

<section class="w-full h-full flex flex-col lg:flex-row items-center">
    <div class="w-full h-1/2 lg:w-1/2 lg:hover:h-full hover:h-[95%] lg:hover:w-[90%] lg:h-full duration-150">
        <SectionHalf bgcolor="slate-100" header="About me"/>
    </div>
    <div class="w-full h-1/2 lg:w-1/2 lg:hover:h-full hover:h-[95%] lg:hover:w-[90%] lg:h-full duration-150">
        <SectionHalf bgcolor="slate-950" header="Hobbies"/>
    </div>
</section>