export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","models/gltf_embedded_0.png","models/savana.glb","models/savana2.glb","models/tree.gltf"]),
	mimeTypes: {".png":"image/png",".glb":"model/gltf-binary",".gltf":"model/gltf+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.3302c677.js","app":"_app/immutable/entry/app.41214994.js","imports":["_app/immutable/entry/start.3302c677.js","_app/immutable/chunks/index.dada67a2.js","_app/immutable/chunks/singletons.ee46541e.js","_app/immutable/entry/app.41214994.js","_app/immutable/chunks/index.dada67a2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
