import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `<div class="flex flex-col w-screen h-screen bg-zinc-900"><main class="w-full h-full relative">${slots.default ? slots.default({}) : ``}</main>

	<footer></footer>
</div>`;
});
export {
  Layout as default
};
