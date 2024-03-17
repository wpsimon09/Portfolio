import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col w-screen h-screen"><main class="w-full h-full">${slots.default ? slots.default({}) : ``}</main>

	<footer></footer>
</div>`;
});
export {
  Layout as default
};
