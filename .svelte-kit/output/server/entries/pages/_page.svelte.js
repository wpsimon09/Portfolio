import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const Information = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex flex-col items-center bg-black bg-opacity-5 p-2 relative backdrop-blur-sm"><h1 class="text-9xl text-slate-100 font-capriola font-bold drop-shadow-2xl">WELCOME
        </h1>
        <p class="text-slate-100 font-capriola font-bold drop-shadow-2xl text-lg">My name is Simon, the software developer</p>
        <div class="flex items-center self-center scale-50"><a href="https://github.com/wpsimon09"><svg width="98" height="98" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#F5F5F5"></path></svg></a></div></section>`;
});
const ThreeJS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  return `<div id="resizeHelper" class="w-full h-full flex flex-col items-center"><canvas class="h-full w-full bg-white"${add_attribute("this", canvas, 0)}></canvas></div>`;
});
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const ScrollDownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex flex-col items-center"><div><script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"><\/script> 

        <dotlottie-player src="https://lottie.host/813c7ccc-c4de-47ab-9cdf-f818cb5750aa/NSdQjcQlwW.json" background="transparent" speed="1" style="width: 60px; height: 60px;" loop autoplay></dotlottie-player></div></div>`;
});
const FirstSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full h-full relative dark:bg-slate-950 bg-slate-100"><div class="flex flex-col items-center w-full h-full "><div class="w-full z-20">${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})}</div>
        <div class="z-10 flex flex-row h-full items-center relative">${validate_component(Information, "Information").$$render($$result, {}, {}, {})}</div></div>  
    <div class="w-full h-full flex-col-reverse items-center absolute inset-0 "><div class="flex flex-col-reverse items-center relative "><div class="w-full absolute mb-10">${validate_component(ScrollDownIcon, "ScrollDownIcon").$$render($$result, {}, {}, {})}</div>
            ${validate_component(ThreeJS, "ThreeJs").$$render($$result, {}, {}, {})}</div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full h-full flex flex-col items-center">${validate_component(FirstSection, "FirstSection").$$render($$result, {}, {}, {})}</section>
<section class="w-full h-full flex flex-col itemc-center"></section>`;
});
export {
  Page as default
};
