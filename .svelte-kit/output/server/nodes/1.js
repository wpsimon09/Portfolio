

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c31cd5f5.js","_app/immutable/chunks/index.f93c11f0.js","_app/immutable/chunks/singletons.c18cf4d1.js"];
export const stylesheets = [];
export const fonts = [];
