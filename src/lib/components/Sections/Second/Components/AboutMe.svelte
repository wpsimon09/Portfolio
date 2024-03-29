<script>
    import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    
    export let y;
    export let trashold;
</script>


{#if y>trashold  }    
<div transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.2 , easing: quintOut }} class=" w-full h-full flex flex-col lg:flex-row items-center z-50 ">
    <div class=" w-full lg:w-1/2 scale-75 shadow-2xl">
        <img alt="me" class="w-full h-full" src="icons/me.png"/>
    </div> 
    <div class="lg:w-1/2 w-full  scale-90 -mt-10">
        <p class="text-slate-100 bg-zinc-800 mt-2 shadow-2xl text-md lg:text-2xl p-4 lg:p-10 w-full rounded-lg">
            My name is Simon, and I'm a second-year ICT student at HZ University of Applied Sciences in the Netherlands. My focus is on software engineering. I originally come from Presov, a smaller town in Slovakia. I enjoy playing electric guitar and reading books about computer graphics.
        </p>

        <br/>

        <p class=" text-slate-100 bg-zinc-800 shadow-2xl text-md lg:text-2xl p-4 lg:p-10 w-full rounded-lg ">
            I am interested in Front-End web development and 3D graphics programming with C++ and OpenGL
        </p>
    </div>
</div>
{/if}