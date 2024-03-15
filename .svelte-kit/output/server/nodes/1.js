

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dd35c64e.js","_app/immutable/chunks/index.dada67a2.js","_app/immutable/chunks/singletons.ee46541e.js"];
export const stylesheets = [];
export const fonts = [];
