

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.68c4cdb1.js","_app/immutable/chunks/index.7a0c62c7.js","_app/immutable/chunks/singletons.82c93a1f.js"];
export const stylesheets = [];
export const fonts = [];
