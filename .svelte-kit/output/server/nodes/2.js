

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d3aa07dc.js","_app/immutable/chunks/index.7a0c62c7.js"];
export const stylesheets = [];
export const fonts = [];
