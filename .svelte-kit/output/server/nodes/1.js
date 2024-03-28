

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.298edcf0.js","_app/immutable/chunks/index.d06215d4.js","_app/immutable/chunks/singletons.8910739a.js"];
export const stylesheets = [];
export const fonts = [];
