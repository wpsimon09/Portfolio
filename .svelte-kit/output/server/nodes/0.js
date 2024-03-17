

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.eebd1096.js","_app/immutable/chunks/index.dada67a2.js"];
export const stylesheets = ["_app/immutable/assets/0.339565f2.css"];
export const fonts = [];
