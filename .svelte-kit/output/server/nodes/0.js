

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7e148fe3.js","_app/immutable/chunks/index.d06215d4.js"];
export const stylesheets = ["_app/immutable/assets/0.c1a21867.css"];
export const fonts = [];
