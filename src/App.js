import './App.css';
import React, {Component} from "react";
import * as THREE from "three";
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {GPUStatsPanel} from 'three/examples/jsm/utils/GPUStatsPanel.js';
import {initGui} from "./gui.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {AxisProperties, createAxes} from "./axes";

class App extends Component {
    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({antialias: true});

        const controls = new OrbitControls(camera, renderer.domElement);


//      renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.setClearColor( 0x000000, 1.0 );
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild(renderer.domElement);
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshMatcapMaterial({color: 0x00ffff});

        const axisProps = new AxisProperties();
        const axes = createAxes(axisProps);

        // noinspection JSCheckFunctionSignatures
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add(cube);
        scene.add(...axes);

        camera.position.z = 10;
        controls.update();


        let animate = function () {
            stats.begin();
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
            stats.end();

        };

        const stats = new Stats();
        document.body.appendChild(stats.domElement);

        const gpuPanel = new GPUStatsPanel(renderer.getContext());
        stats.addPanel(gpuPanel);
        stats.showPanel(0);

        // initGui();


        animate();
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)}/>
        )
    }
}

export default App;
