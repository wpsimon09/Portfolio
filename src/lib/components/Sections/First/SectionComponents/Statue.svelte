<script>
    import * as THREE from "three";
    import { browser } from "$app/environment";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    import { onMount } from "svelte";
    import  RectAreaLightUniformsLib from THREE;

    let canvas;

    onMount(() => {
        if (browser) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                45,
                canvas.clientHeight / canvas.clientWidth,
                0.1,
                1000
            );
            camera.position.z = 5;
            camera.position.y = 4;
            camera.rotateX(THREE.MathUtils.degToRad(-40));
            const renderer = new THREE.WebGLRenderer({ canvas: canvas });

            renderer.setSize(canvas.clientWidth, canvas.clientHeight);

            const controls = new OrbitControls(camera, canvas);

            const lightColor = 0xfdb813;

            const gltfLoader = new GLTFLoader();

            const ambient = new THREE.AmbientLight(lightColor, 0.5);
            const directionLight = new THREE.DirectionalLight(
                THREE.Color.NAMES.white,
                10
            );
            directionLight.position.set(0, 10, 4);
            directionLight.castShadow = true;

            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshBasicMaterial({ wireframe: true });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(
                directionLight.position.x,
                directionLight.position.y,
                directionLight.position.z
            );

            const width = 50;
            const height = 50;
            const intensity = 100;
            const rectLight = new THREE.RectAreaLight(
                0xffffff,
                intensity,
                width,
                height
            );
            rectLight.position.set(0, 5, 0);
            rectLight.lookAt(0, 0, 0);
            scene.add(rectLight);

            scene.background = new THREE.Color(0x020617);
            //scene.add(directionLight);
            scene.add(ambient);
            scene.add(cube);

            gltfLoader.load("models/statue/scene.gltf", (gltf) => {
                gltf.scene.receiveShadow = true;
                scene.add(gltf.scene);
                console.log(gltf);
            });

            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                controls.update(0.01);
            }
            animate();
        }
    });
</script>

<canvas bind:this={canvas} class="w-full h-full bg-white" />
