import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const Information = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex flex-col items-center p-2 relative backdrop-blur-sm"><h1 class="text-9xl dark:text-slate-10 font-poppins text-slate-950 font-bold drop-shadow-2xl">WELCOME</h1>
        
        <p class="text-3xl ml-2 mt-5 dark:text-slate-300 text-slate-950">My name is Simon</p>
        
        <p class="text-3xl ml-2 mt-5 dark:text-slate-300 text-slate-950">I am interested in web development and 3D
        </p></section>`;
});
const ThreeJS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  return `<div id="resizeHelper" class="w-full h-full flex flex-col items-center"><canvas class="h-full w-full bg-white"${add_attribute("this", canvas, 0)}></canvas></div>`;
});
const FirstSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full h-full relative dark:bg-slate-950 bg-slate-100"><div class="flex flex-col items-center w-full h-full "><div class="z-10 flex flex-row h-full items-center relative">${validate_component(Information, "Information").$$render($$result, {}, {}, {})}</div></div>  
    <div class="w-full h-full absolute inset-0">${validate_component(ThreeJS, "ThreeJs").$$render($$result, {}, {}, {})}</div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full h-full flex flex-col items-center">${validate_component(FirstSection, "FirstSection").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
