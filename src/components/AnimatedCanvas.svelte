<script>
    //Reg
	import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { onMount } from 'svelte';

    let animatedScene;
    let scene, camera, renderer;
    let controls, pointlight;
    let geometry, material, cube;


    onMount(() => { 
        init()
    });

    function init() {

        //Camera
        camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.01,
            10
        );

        camera.position.z = 10;

        //Scene
        scene = new THREE.Scene();

        //Object
        geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
        material = new THREE.MeshNormalMaterial();
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        //Renderer and position
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: animatedScene });
        renderer.setSize(window.innerWidth, window.innerHeight);
        //renderer.setAnimationLoop(animation);
        document.body.appendChild(renderer.domElement);

        //Control
        controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        animate();
    }

    function animate(time) {
        controls.update();
        renderer.render(scene,camera);
        cube.rotation.y += 0.01;
        requestAnimationFrame(animate);
    };

    /* function animation(time) {
        controls.update();
        mesh.rotation.x = time / 2000;
        mesh.rotation.y = time / 1000;

        renderer.render(scene, camera);
    } */
</script>

<canvas bind:this={animatedScene}></canvas>
