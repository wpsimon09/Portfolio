export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["coding.png","driving.png","favicon.png","game-engine.png","gaming.png","guitar.png","icons/github-mark-white.svg","me.jpg","metal.png","models/clock/license.txt","models/clock/scene.bin","models/clock/scene.gltf","models/clock/textures/Material_3_baseColor.png","models/clock/textures/Material_3_emissive.png","models/clock/textures/Material_3_metallicRoughness.png","models/old-house/license.txt","models/old-house/scene.bin","models/old-house/scene.gltf","models/old-house/textures/flat_diffuse.png","models/old-house/textures/flat_specularGlossiness.jpeg","models/old-house/textures/kust_diffuse.png","models/old-house/textures/pnl_off_diffuse.png","models/old-house/textures/pnl_on_emissive.png","models/old-house/textures/transformat_diffuse.jpeg","models/space/license.txt","models/space/scene.bin","models/space/scene.gltf","models/space/textures/Propulsor_baseColor.png","models/space/textures/Vortex_baseColor.png","reading.png","rendering.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.45f2b47b.js","app":"_app/immutable/entry/app.3ad2728c.js","imports":["_app/immutable/entry/start.45f2b47b.js","_app/immutable/chunks/index.f93c11f0.js","_app/immutable/chunks/singletons.c18cf4d1.js","_app/immutable/entry/app.3ad2728c.js","_app/immutable/chunks/index.f93c11f0.js"],"stylesheets":[],"fonts":[]},
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
