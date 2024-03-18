

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.898d7150.js","_app/immutable/chunks/index.7a0c62c7.js"];
export const stylesheets = ["_app/immutable/assets/0.b9c16d2d.css"];
export const fonts = [];
