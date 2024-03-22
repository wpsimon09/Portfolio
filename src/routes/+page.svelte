<script>
	import FirstSection from "$lib/components/Sections/First/FirstSection.svelte";
	import SecondSection from "$lib/components/Sections/Second/Second.svelte"
	import Third from "$lib/components/Sections/Third/Third.svelte";
</script>

<div class=" h-full flex-col items-center overflow-auto ">
    <section class="w-full h-full flex flex-col items-center snap-center">
        <FirstSection/>
    </section> 
    
    <section class="w-full h-full flex flex-col items-center snap-center">
        <SecondSection/>
    </section> 
    
    <section class="w-full h-full flex flex-col items-center snap-none ">
        <Third/>
    </section>
</div>

	


<style>

</style>
