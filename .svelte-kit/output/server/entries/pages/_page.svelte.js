import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape, h as createEventDispatcher } from "../../chunks/index.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="h-40 justify-center flex flex-col items-center w-full relative bg-zinc-950"><h1 class="text-2xl text-zinc-500">Thank you !</h1>
    <button class="text-2xl text-zinc-700 underline">Credits</button></section>`;
});
const Information = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex flex-col w-full items-center bg-black bg-opacity-5 p-2 relative backdrop-blur-sm"><h1 class="text-5xl lg:text-9xl text-slate-100 font-julius font-bold drop-shadow-2xl">WELCOME
        </h1>
        <p class="text-slate-100 font-capriola drop-shadow-2xl text-sm lg:text-lg">My name is Simon, the software developer</p>
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
  return `<section class="w-full h-full relative dark:bg-slate-950 bg-slate-100"><div class="flex flex-col items-center w-full h-full"><div class="w-full z-20">${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})}</div>
        <div class="z-10 flex flex-row h-full items-center relative">${validate_component(Information, "Information").$$render($$result, {}, {}, {})}</div></div>  
    <div class="w-full h-full flex-col-reverse items-center absolute inset-0"><div class="h-full w-full flex flex-col-reverse items-center relative "><div class="w-full absolute mb-10">${validate_component(ScrollDownIcon, "ScrollDownIcon").$$render($$result, {}, {}, {})}</div>
            ${validate_component(ThreeJS, "ThreeJs").$$render($$result, {}, {}, {})}</div></div>
</section>`;
});
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex flex-col lg:flex-row items-center z-50 "><div class="w-1/2 scale-90 shadow-2xl"><img alt="me" class="w-full h-full" src="/me.png"></div> 
    <div class="w-full lg:w-1/2 mx-6"><p class="text-slate-100 bg-zinc-800 mt-2 shadow-2xl text-md lg:text-2xl p-4 lg:p-10 w-full rounded-lg ">My name is Simon, and I&#39;m a second-year ICT student at HZ University of Applied Sciences in the Netherlands. My focus is on software engineering. I originally come from Presov, a smaller town in Slovakia. I enjoy playing electric guitar and reading books about computer graphics.
        </p>

        <br>

        <p class="text-slate-100 bg-zinc-800 shadow-2xl text-md lg:text-2xl p-4 lg:p-10 w-full rounded-lg ">I am interested in Front-End web development and 3D graphics programming with C++ and OpenGL
        </p></div></div>`;
});
const Hobbies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".circle-sm.svelte-1un0cka{left:calc(50% - 25px);top:calc(50% - 25px)}.circle-sm.svelte-1un0cka:nth-child(1){transform:rotate(45deg) translateX(100px) rotate(-45deg)}.circle-sm.svelte-1un0cka:nth-child(2){transform:rotate(90deg) translateX(100px) rotate(-90deg)}.circle-sm.svelte-1un0cka:nth-child(3){transform:rotate(135deg) translateX(100px) rotate(-135deg)}.circle-sm.svelte-1un0cka:nth-child(4){transform:rotate(180deg) translateX(100px) rotate(-180deg)}.circle-sm.svelte-1un0cka:nth-child(5){transform:rotate(225deg) translateX(100px) rotate(-225deg)}.circle-sm.svelte-1un0cka:nth-child(6){transform:rotate(270deg) translateX(100px) rotate(-270deg)}.circle-sm.svelte-1un0cka:nth-child(7){transform:rotate(315deg) translateX(100px) rotate(-315deg)}.circle-sm.svelte-1un0cka:nth-child(8){transform:rotate(360deg) translateX(100px) rotate(-360deg)}",
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
  $$result.css.add(css);
  return `<div class="flex flex-col items-center h-full justify-center realtive z-50"><div class="relative flex flex-col justify-center mr-20 items-center h-full main">${each(hobbies, (hobby) => {
    return `<div class="absolute duration-100 circle-sm lg:circle flex flex-col items-center bg-zinc-800 shadow-2xl w-32 h-32 rounded-full justify-center svelte-1un0cka"><dvi class=""><img class="w-16 h-16"${add_attribute("src", hobby.icon, 0)} alt="hobbypng"></dvi>
                <p class="text-slate-200">${escape(hobby.name)}</p>
            </div>`;
  })}</div>
 
</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headerText } = $$props;
  let { isHoveredOn } = $$props;
  if ($$props.headerText === void 0 && $$bindings.headerText && headerText !== void 0)
    $$bindings.headerText(headerText);
  if ($$props.isHoveredOn === void 0 && $$bindings.isHoveredOn && isHoveredOn !== void 0)
    $$bindings.isHoveredOn(isHoveredOn);
  return `<div class="w-full flex h-full flex-col items-center "><h1 class="text-6xl lg:text-9xl text-slate-100 font-julius lg:mt-20 mt-2 ">${escape(headerText)}</h1>
    ${isHoveredOn && headerText == "About me" ? `<div class="flex flex-col w-full h-full overflow-y-auto lg:overflow-hidden items-center">${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}</div>` : `${isHoveredOn && headerText == "Hobbies" ? `<div class="flex flex-col w-full h-full items-center">${validate_component(Hobbies, "Hobbies").$$render($$result, {}, {}, {})}</div>` : ``}`}</div>`;
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
<div class="${"h-full w-full " + escape(bgcolor, true) + " hover:p-2 duration-150"}">${validate_component(Header, "Header").$$render(
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
  return `<section class="w-full h-full flex flex-col lg:flex-row items-center"><div class="w-full h-1/2 lg:w-1/2 lg:h-full ">${validate_component(SectionHalf, "SectionHalf").$$render(
    $$result,
    {
      bgcolor: "bg-zinc-900",
      header: "About me"
    },
    {},
    {}
  )}</div>
    <div class="w-full h-1/2 lg:w-1/2 lg:h-full">${validate_component(SectionHalf, "SectionHalf").$$render(
    $$result,
    {
      bgcolor: "bg-zinc-900",
      header: "Hobbies"
    },
    {},
    {}
  )}</div></section>`;
});
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showTrashHold } = $$props;
  let { y } = $$props;
  let { project } = $$props;
  let { position } = $$props;
  createEventDispatcher();
  if ($$props.showTrashHold === void 0 && $$bindings.showTrashHold && showTrashHold !== void 0)
    $$bindings.showTrashHold(showTrashHold);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  return `${showTrashHold < y ? `<section class="${escape(position ? "flex-row -ml-10" : "-mr-10 flex-row-reverse", true) + " flex items-center z-50"}"><div class="${"flex flex-row items-center w-full gap-2 " + escape(position ? "flex-row" : "flex-row-reverse", true)}"><div class="w-20 h-20 scale-[0.4] rounded-full bg-slate-100"></div>
        <div class="flex flex-col w-1/2 items-center"><h2 class="text-2xl font-bold text-center text-slate-100 self-startc font-julius">${escape(project.title)}</h2>
            <div class="w-40 my-2 h-0.5 bg-slate-200"></div>
            <div class="mt-2 w-full hidden lg:flex"><p class="text-slate-100 w-full text-center">${escape(project.description)}</p></div>
            <button class="${"text-white underline mt-2 mb-2 " + escape(position ? "hover:rotate-6" : "hover:-rotate-6", true) + " duration-200"}">READ MORE</button></div></div></section>` : ``}`;
});
const projects = [
  {
    title: "Class Bank Fund Manager",
    description: "Developed an application for managing class funds during high school. It helped keep track of money and expenses easily.",
    tech_stack: [
      "C#",
      "UWP",
      "XAML"
    ],
    link: "https://github.com/wpsimon09/RocnikovyProjekt-SPSE-BANK",
    link_deployement: "",
    image: [
      "projects/spse-bank.png"
    ]
  },
  {
    title: "Curious Village",
    description: "Created an educational game to teach children about internet safety. It won first place in class. The game helps kids learn not to share personal information online.",
    tech_stack: [
      "TypeScript",
      "OOP",
      "Canvas"
    ],
    link: "https://github.com/HZ-2223/oop-team22",
    link_deployement: "https://hz-2223.github.io/oop-team22/",
    image: [
      "projects/curious-village.png"
    ]
  },
  {
    title: "Ligplatsen Zeeland",
    description: "Built a web application where people can browse and rent parking spaces for their boats.",
    tech_stack: [
      "Laravel",
      "JavaScript",
      "PHP",
      "MySQL",
      "SSH",
      "Authentification"
    ],
    link: "",
    link_deployement: "https://ligplaatsenzeeland.nl/",
    image: [
      "projects/boat-parking.png"
    ]
  },
  {
    title: "Pablo Rendering Engine",
    description: "A personal project where I developed a rendering engine and OpenGL framework from scratch. The engine supports features like physics-based rendering, image-based lighting, and model loading.",
    tech_stack: [
      "C++",
      "GLSL",
      "Cmake",
      "OpenGL",
      "OOP"
    ],
    link: "https://github.com/wpsimon09/Pablo-Renderer",
    link_deployement: "",
    image: [
      "projects/pablo.png"
    ]
  },
  {
    title: "Hangout Safari",
    description: "Designed a web application to help students socialize and overcome social anxiety. It features a 3D interactive safari where you collect animals based on the number of social events attended.",
    tech_stack: [
      "Three.js",
      "SvelteKit",
      "Microservices",
      "Supabase",
      "Docker"
    ],
    link: "https://github.com/HangoutSafari/Hangout-Safari",
    link_deployement: "",
    image: [
      "projects/safari.png"
    ]
  },
  {
    title: "Screen Saver for Giant Screen",
    description: "During a hackathon for the Joint Research Center Zeeland, we created a screen saver for one of the biggest screens in the Netherlands. It displayed a glowing sphere that expanded based on clapping sounds. Also showed animated models of different institutions.",
    tech_stack: [
      "Unity",
      "Blender",
      "C#"
    ],
    link: "https://cloud.unity.com/home/organizations/9071844740585/projects/e2c9e37c-376f-4454-aecf-747574321550/details?tab=services",
    link_deployement: "",
    image: [
      "projects/hack.jpg"
    ]
  },
  {
    title: "Workshop about graphics programming",
    description: "During the We Are in IT Together conference organized by HZ University of Applied Sciences, I had an opportunity to teach a workshop where participants could learn what it takes to create interactive applications or game engines. The workshop covered basic topics such as rendering pipeline, buffers, graphics APIs, shading models, and more. Attendance reached the maximum amount of participants and harvested great success.    ",
    tech_stack: [
      "C++",
      "GLSL",
      "OpenGL",
      "Computer graphics",
      "Teaching"
    ],
    link: "https://github.com/wpsimon09/OpenGL-Workshop",
    link_deployement: "",
    image: [
      "projects/workshop.jpg"
    ]
  }
];
const Third = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trasholds = [];
  for (let i = 0; i < projects.length; i++) {
    trasholds.push(1140 + 250 * i);
  }
  console.log(trasholds);
  let { y } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<section class="w-full h-full relative items-center flex flex-col my-10"><h1 class="text-4xl mb-10 text-white">My projects </h1>
    <div class="h-full w-full bg-zinc-900 relative items-center flex flex-col gap-20"><div class="w-2 h-2 rounded-full bg-slate-50 z-10"></div>
        <div class="bg-slate-50 w-0.5 h-full absolute z-30"></div>
        ${each(projects, (project, i) => {
    return `<div class="${"w-full flex-row " + escape(i % 2 == 0 ? "flex-row" : "flex-row-reverse", true) + " flex z-20"}"><div class="w-1/2"></div>
                <div class="w-1/2 z-40">${validate_component(Project, "Project").$$render(
      $$result,
      {
        showTrashHold: trasholds[i],
        y,
        position: i % 2 == 0,
        project
      },
      {},
      {}
    )}</div>
        </div>`;
  })}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y = 20;
  console.log(y);
  let { selectedProject = {} } = $$props;
  if ($$props.selectedProject === void 0 && $$bindings.selectedProject && selectedProject !== void 0)
    $$bindings.selectedProject(selectedProject);
  return `<div class="h-full flex-col items-center snap-y overflow-auto relative ">${``}
  
    <section class="w-full h-full flex flex-col items-center snap-center">${validate_component(FirstSection, "FirstSection").$$render($$result, {}, {}, {})}</section> 
    
    <section class="w-full h-full flex flex-col items-center snap-center">${validate_component(Second, "SecondSection").$$render($$result, {}, {}, {})}</section> 
    
    <section class="w-full flex flex-col items-center snap-start">${validate_component(Third, "Third").$$render($$result, { y }, {}, {})}</section>
    
    <section class="w-full flex flex-col items-center snap-start">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
            ${``}</section>  

</div>`;
});
export {
  Page as default
};
