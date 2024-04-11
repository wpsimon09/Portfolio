<script>
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';

    import FirstSection from "$lib/components/Sections/First/FirstSection.svelte";
    import Footer from "$lib/components/Sections/Footer/Footer.svelte";
	import SecondSection from "$lib/components/Sections/Second/Second.svelte"
	import Third from "$lib/components/Sections/Third/Third.svelte";
    import Fourth from "$lib/components/Sections/Fourth/Fourth.svelte"
    import ProjectShow from '$lib/components/Sections/Second/Components/ProjectShow.svelte';
	import { onMount } from 'svelte';


    let y = 20;
    console.log(y);

    onMount(()=>{
        if(browser){
            window.scrollTo(0,2)
        }
    })

    let creditsVisible = false;

    let isProjectVisible = false;

    export let selectedProject = {}

    function handleProjectShowEvent(e){
        selectedProject = e.detail.passed_project;
        isProjectVisible = true;
    }
</script>


<div on:scroll={(event)=>{y = event.currentTarget.scrollTop}} class=" h-[102vh] flex-col items-center snap-y snap-mandatory overflow-auto relative ">

    {#if isProjectVisible}
        <ProjectShow on:click={()=>{isProjectVisible = false}} project = {selectedProject} />
    {/if}
  
    <section class="w-full h-screen flex flex-col items-center snap-start">
        <FirstSection/>
    </section> 
    
    <section class="w-full lg:h-screen flex flex-col items-center lg:snap-center">
        <SecondSection y={y}/>
    </section> 

    <section class="w-full lg:h-screen flex flex-col items-center snap-start">
        <Fourth y={y}/>
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
