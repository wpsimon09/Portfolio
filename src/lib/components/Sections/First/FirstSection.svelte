<script>
    import Information from "./SectionComponents/Information.svelte";
    import Statue from "./SectionComponents/Statue.svelte";
    
</script>

<section class="w-full h-full flex flex-row items-center dark:bg-slate-950 bg-slate-100">
    <div class="flex items-center w-full h-full">
        <div class="ml-20 mb-40 w-1/3">
            <Information/>
        </div>
        <div class="w-2/3 h-full p-20">
            <Statue/>
        </div>
    </div>
</section>

<style>

</style>