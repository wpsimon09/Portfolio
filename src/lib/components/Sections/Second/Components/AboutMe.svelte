<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let y;
	export let trashold;
	export let scrollOutThrahsold;
</script>

<div
	transition:scale={{ duration: 400, delay: 10, opacity: 0.0, start: 0.2, easing: quintOut }}
	class=" w-full h-full flex flex-col lg:flex-row items-center z-50"
>
	<div class="  w-full lg:w-1/2 scale-75 shadow-2xl flex flex-col items-center">
		<img alt="me" class="rounded-t-lg w-full h-full" src="icons/me.png" />
		<a
			class=" text-lg lg:text-2xl w-full hover:p-4 p-2 rounded-b-lg text-center hover:underline duration-200 dark:bg-slate-100 bg-zinc-900 text-white dark:text-zinc-800"
			target="_blank"
			href="cv/cv.pdf">Read my CV</a
		>
	</div>
	<div class="lg:w-1/2 w-full scale-90 -mt-20 lg:-mt-10">
		<p
			class="text-zinc-800 bg-slate-100 dark:text-slate-100 dark:bg-zinc-900 mt-2 shadow-xl text-md lg:text-2xl p-4 lg:p-10 w-full rounded-lg"
		>
			My name is Simon, and I'm a third-year ICT student at HZ University of Applied Sciences in the
			Netherlands. My focus is on software engineering and rendering technology. I originally come
			from Presov, a smaller town in Slovakia. I enjoy playing electric guitar and reading books
			about computer graphics.
		</p>

		<br />

		<p
			class=" dark:text-slate-100 dark:bg-zinc-900 bg-slate-100 shadow-xl text-md lg:text-2xl p-4 lg:p-10 w-full rounded-lg"
		>
			I am interested in everything 3D rendering related and web-technologies.
		</p>
	</div>
</div>
