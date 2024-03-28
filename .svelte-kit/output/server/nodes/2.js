

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.310abdfa.js","_app/immutable/chunks/index.d06215d4.js"];
export const stylesheets = ["_app/immutable/assets/2.67d6e5f7.css"];
export const fonts = [];
