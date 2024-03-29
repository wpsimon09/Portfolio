<script>
    import SectionHalf from "./Components/SectionHalf.svelte";
</script>

<section class="w-full lg:h-full lg:flex flex-col lg:flex-row items-center">
    <div class="w-full h-screen lg:w-1/2 lg:h-full snap-start ">
        <SectionHalf bgcolor="bg-zinc-900" header="About me"/>
    </div>
    <div class="w-full h-screen lg:w-1/2 lg:h-full snap-start">
        <SectionHalf bgcolor="bg-zinc-900" header="Hobbies"/>
    </div>
</section>