

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.43a0f2a7.js","_app/immutable/chunks/index.dada67a2.js","_app/immutable/chunks/singletons.f5b4db11.js"];
export const stylesheets = [];
export const fonts = [];
