export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["coding.png","driving.png","favicon.png","game-engine.png","gaming.png","gh-w.png","guitar.png","icons/github-mark-white.svg","link.png","me.png","metal.png","models/space/license.txt","models/space/scene.bin","models/space/scene.gltf","models/space/textures/Propulsor_baseColor.png","models/space/textures/Vortex_baseColor.png","projects/boat-parking.png","projects/curious-village.png","projects/hack.jpg","projects/pablo.png","projects/safari.png","projects/spse-bank.png","projects/workshop.jpg","reading.png","rendering.png","wrench.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.2216a728.js","app":"_app/immutable/entry/app.4096ab30.js","imports":["_app/immutable/entry/start.2216a728.js","_app/immutable/chunks/index.d06215d4.js","_app/immutable/chunks/singletons.8d9f39b8.js","_app/immutable/entry/app.4096ab30.js","_app/immutable/chunks/index.d06215d4.js"],"stylesheets":[],"fonts":[]},
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
