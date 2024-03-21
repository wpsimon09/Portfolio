

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d1c41996.js","_app/immutable/chunks/index.f93c11f0.js"];
export const stylesheets = ["_app/immutable/assets/0.4b8bdcc8.css"];
export const fonts = [];
