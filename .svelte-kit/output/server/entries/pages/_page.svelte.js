import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/index.js";
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="lg:w-[70%] h-full p-10 flex flex-col items-center z-50"><div class="bg-slate-150 p-2 rounded-full h-32 w-32 lg:w-64 lg:h-64 shadow-2xl"><img alt="me" class="rounded-full w-full h-full" src="/me.jpg"></div> 
    <p class="text-slate-900 mt-2 shadow-2xl text-md lg:text-2xl p-10 w-full rounded-lg ">As you might have red my name is Simon I am second year ICT sudent in the Netherlands.
        <br>
        I study at HZ university of applied sciences and my focus lies within software engeneering
        <br>
        I come from Slovakia from smaller town called Presov
        <br>
        I like playing electric guitar and reading books about computer graphics
        <br></p></div>`;
});
const Hobbies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".circle.svelte-15u1rnd{left:calc(50% - 25px);top:calc(50% - 25px)}.circle.svelte-15u1rnd:nth-child(1){transform:rotate(45deg) translateX(240px)}.circle.svelte-15u1rnd:nth-child(2){transform:rotate(90deg) translateX(240px)}.circle.svelte-15u1rnd:nth-child(3){transform:rotate(135deg) translateX(240px)}.circle.svelte-15u1rnd:nth-child(4){transform:rotate(180deg) translateX(240px)}.circle.svelte-15u1rnd:nth-child(5){transform:rotate(225deg) translateX(240px)}.circle.svelte-15u1rnd:nth-child(6){transform:rotate(270deg) translateX(240px)}.circle.svelte-15u1rnd:nth-child(7){transform:rotate(315deg) translateX(240px)}.circle.svelte-15u1rnd:nth-child(8){transform:rotate(360deg) translateX(240px)}",
  map: null
};
const Hobbies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hobbies = [
    {
      "name": "Playing guitar",
      "icon": "/guitar.png"
    },
    {
      "name": "Programming",
      "icon": "/coding.png"
    },
    {
      "name": "Rendering",
      "icon": "/rendering.png"
    },
    {
      "name": "Reading",
      "icon": "/reading.png"
    },
    { "name": "Gaming", "icon": "/gaming.png" },
    {
      "name": "Driving",
      "icon": "/driving.png"
    },
    {
      "name": "Metal music",
      "icon": "/metal.png"
    },
    {
      "name": "Game engines",
      "icon": "/game-engine.png"
    }
  ];
  let hobbySelected = "hello";
  $$result.css.add(css);
  return `<dvi class="flex flex-col items-center h-full justify-center w-full"><div class="relative flex flex-col justify-center mr-20 items-center h-full main ">${each(hobbies, (hobby, i) => {
    return `<div class="w-28 h-28 circle absolute flex flex-col items-center bg-slate-200 shadow-2xl rounded-full svelte-15u1rnd"><div class="rotate-0 w-full h-full flex flex-col justify-center items-center"><img class="w-20 h-20"${add_attribute("src", hobby.icon, 0)} alt="hobbypng"></div>
        </div>`;
  })}</div>
    <h1 class="text-slate-200 text-3xl text-center absolute ">${escape(hobbySelected)}</h1>
</dvi>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headerText } = $$props;
  let { isHoveredOn } = $$props;
  let textColor;
  if (headerText === "About me") {
    textColor = "slate-900";
  } else {
    textColor = "slate-100";
  }
  if ($$props.headerText === void 0 && $$bindings.headerText && headerText !== void 0)
    $$bindings.headerText(headerText);
  if ($$props.isHoveredOn === void 0 && $$bindings.isHoveredOn && isHoveredOn !== void 0)
    $$bindings.isHoveredOn(isHoveredOn);
  return `<div class="w-full flex h-full flex-col items-center justify-center"><h1 class="${"text-6xl lg:text-9xl text-" + escape(textColor, true) + " font-julius lg:mt-20 mt-2"}">${escape(headerText)}</h1>
    ${isHoveredOn && headerText == "About me" ? `<div class="flex flex-col items-center">${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}</div>` : `${isHoveredOn && headerText == "Hobbies" ? `<div class="flex flex-col items-center h-full">${validate_component(Hobbies, "Hobbies").$$render($$result, {}, {}, {})}</div>` : ``}`}</div>`;
});
const SectionHalf = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgcolor } = $$props;
  let { header } = $$props;
  let isHovered;
  if ($$props.bgcolor === void 0 && $$bindings.bgcolor && bgcolor !== void 0)
    $$bindings.bgcolor(bgcolor);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  return `
<div class="${"w-full h-full bg-" + escape(bgcolor, true)}">${validate_component(Header, "Header").$$render(
    $$result,
    {
      isHoveredOn: isHovered,
      headerText: header
    },
    {},
    {}
  )}</div>`;
});
const Second = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full h-full flex flex-col lg:flex-row items-center"><div class="w-full h-1/2 lg:w-1/2 lg:hover:h-full hover:h-[95%] lg:hover:w-[90%] lg:h-full duration-150">${validate_component(SectionHalf, "SectionHalf").$$render($$result, { bgcolor: "slate-100", header: "About me" }, {}, {})}</div>
    <div class="w-full h-1/2 lg:w-1/2 lg:hover:h-full hover:h-[95%] lg:hover:w-[90%] lg:h-full duration-150">${validate_component(SectionHalf, "SectionHalf").$$render($$result, { bgcolor: "slate-950", header: "Hobbies" }, {}, {})}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full flex-col items-center snap-y snap-mandatory overflow-auto scroll-m-24">
	
	<section class="w-full h-full flex flex-col items-center snap-center">${validate_component(Second, "SecondSection").$$render($$result, {}, {}, {})}</section>
</div>`;
});
export {
  Page as default
};
