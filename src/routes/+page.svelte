<script>
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    import FirstSection from "$lib/components/Sections/First/FirstSection.svelte";
    import Footer from "$lib/components/Sections/Footer/Footer.svelte";
	import SecondSection from "$lib/components/Sections/Second/Second.svelte"
	import Third from "$lib/components/Sections/Third/Third.svelte";
    import ProjectShow from '$lib/components/Sections/Second/Components/ProjectShow.svelte';

    let y = 20;
    console.log(y);

    let creditsVisible = false;

    let isProjectVisible = false;

    let visibleProjectInofo = {
        title:"",
        description:"",
        }

    export let selectedProject = {}

    function handleProjectShowEvent(e){
        console.log(e.details)
        selectedProject = e.detail.passed_project;
        isProjectVisible = true;
    }
</script>


<div on:scroll={(event)=>{y = event.currentTarget.scrollTop}} class=" h-screen flex-col items-center snap-y overflow-auto relative ">

    {#if isProjectVisible}
        <ProjectShow on:click={()=>{isProjectVisible = false}} project = {selectedProject} />
    {/if}
  
    <section class="w-full h-full flex flex-col items-center snap-center">
        <FirstSection/>
    </section> 
    
    <section class="w-full lg:h-full flex flex-col items-center lg:snap-center">
        <SecondSection/>
    </section> 
    
    <section class="w-full  flex flex-col items-center snap-start">
        <Third on:onProjectShow={handleProjectShowEvent} y={y}/>
        
    </section>
    
    <section class="w-full  flex flex-col items-center snap-start">
        <Footer on:click={()=>creditsVisible ? creditsVisible = false : creditsVisible = true}/>
            {#if creditsVisible}
                <div transition:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }} class = "flex flex-col items-center  justify-center w-40 h-20 absolute backdrop:blur-2xl">
                    <a href="https://sketchfab.com/CapAlatriste" class="underline text-white"> 3D model </a>
                    <a href="https://www.flaticon.com/" class="underline text-white"> Icons </a>
                </div>
            {/if}
    </section>  

</div>


	


<style>

</style>
