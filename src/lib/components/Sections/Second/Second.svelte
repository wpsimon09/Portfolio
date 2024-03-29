<script>
    import SectionHalf from "./Components/SectionHalf.svelte";

    export let y;

</script>


<section class="w-full lg:h-full lg:flex flex-col lg:flex-row items-center">
    <div class="w-full h-screen lg:w-1/2 lg:h-full snap-start lg:snap-none ">
        <SectionHalf  y={y} header="About me"/>
    </div>
    <div class="w-full h-screen lg:w-1/2 lg:h-full snap-start lg:snap-none">
        <SectionHalf  y={y} header="Hobbies"/>
    </div>
</section>