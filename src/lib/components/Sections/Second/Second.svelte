<script>
    import SectionHalf from "./Components/SectionHalf.svelte";
</script>

<section class="w-full h-full flex flex-col lg:flex-row items-center">
    <div class="w-full h-1/2 lg:w-1/2 lg:h-full ">
        <SectionHalf bgcolor="bg-slate-100" header="About me"/>
    </div>
    <div class="w-full h-1/2 lg:w-1/2 lg:h-full">
        <SectionHalf bgcolor="bg-slate-900" header="Hobbies"/>
    </div>
</section>