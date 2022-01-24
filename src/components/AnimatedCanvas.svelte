<script>
    //Reg
	import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { onMount } from 'svelte';

    let animatedScene;
    let scene, camera, renderer;
    let controls, pointlight;
    let geometry, material, mesh;


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

        camera.position.z = 1;

        //Scene
        scene = new THREE.Scene();

        //Object
        geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

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
        //mesh.rotation.x = time / 4000;
        mesh.rotation.y = time / 4000;
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
