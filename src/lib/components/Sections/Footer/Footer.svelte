<script>
	import ContactInfo from "./ContactInfo.svelte";


</script>

<section class="h-40 justify-between lg:justify-center flex flex-row-reverse lg:flex-col items-center w-full relative bg-zinc-950">
    <div class="flex flex-col lg:items-center z-[98]">
        <h1 class="text-2xl text-zinc-500">Thank you !</h1>
        <button on:click class="text-2xl text-zinc-700 underline">Credits</button>
    </div>

    <div class="absolute w-full flex flex-row items-center z-[80]">
        <ContactInfo/>
    </div>
</section>
