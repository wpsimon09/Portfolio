

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6086c4e9.js","_app/immutable/chunks/index.f93c11f0.js"];
export const stylesheets = ["_app/immutable/assets/2.fe872c37.css"];
export const fonts = [];
