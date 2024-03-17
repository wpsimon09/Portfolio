<script>
    import * as THREE from "three";
    import { browser } from "$app/environment";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
    import { onMount } from "svelte";
    import { RectAreaLightUniformsLib } from "./RectAreaLightUniformsLib";
    import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
    let canvas;

    onMount(() => {
        
        if (browser) {
            const resizeHelper = document.getElementById("resizeHelper");
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                resizeHelper?.clientWidth / resizeHelper?.clientHeight,
                0.1,
                1000
            );
            camera.position.x = 42;
            camera.position.z = 420;
            camera.position.y = 4;
            camera.rotateX(THREE.MathUtils.degToRad(10));
            const renderer = new THREE.WebGLRenderer({ canvas: canvas });

            renderer.setSize(canvas.clientWidth, canvas.clientHeight);

            const controls = new FlyControls(camera, renderer.domElement);
            controls.movementSpeed = 0;
            controls.rollSpeed = 0.2;

            const lightColor = 0xfdb813;

            const gltfLoader = new GLTFLoader();

            const ambient = new THREE.AmbientLight(lightColor, 0.8);
            const directionLight = new THREE.DirectionalLight(
                THREE.Color.NAMES.white,
                2
            );
            directionLight.position.set(0, 100, 204);
            directionLight.castShadow = true;
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshBasicMaterial({ wireframe: true });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(
                directionLight.position.x,
                directionLight.position.y,
                directionLight.position.z
            );

            RectAreaLightUniformsLib.init();

            const width = 10;
            const height = 10;
            const intensity = 2;
            const rectLight = new THREE.RectAreaLight(
                THREE.Color.NAMES.orangered,
                intensity,
                width,
                height
            );
            rectLight.position.set(0, 5, 140);
            rectLight.lookAt(0, 0, 0);

            const rectLightHelper = new RectAreaLightHelper(rectLight);

            window.addEventListener("resize", () => {
                const SCREEN_HEIGHT = resizeHelper.clientHeight;
                const SCREEN_WIDTH = resizeHelper.clientWidth;

                camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
                camera.updateProjectionMatrix();

                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

                console.log(resizeHelper);
                
            });

            scene.add(rectLight);
            scene.add(directionLight);
            scene.add(ambient);
            scene.add(cube);

            let mixer;
            let activeAction;

            gltfLoader.load("models/space/scene.gltf", (gltf) => {
                gltf.scene.receiveShadow = true;
                gltf.scene.scale.set(0.3, 0.3, 0.3);

                mixer = new THREE.AnimationMixer(gltf.scene);

                activeAction = mixer.clipAction(gltf.animations[0]);

                activeAction.play();

                scene.add(gltf.scene);
            });

            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                mixer.update(clock.getDelta());
                renderer.render(scene, camera);
                controls.update(0.01);
            }
            animate();
        }
    });
</script>

<div id="resizeHelper" class="w-full h-full flex flex-col items-center">
    <canvas bind:this={canvas} class="h-full w-full bg-white" />
</div>
