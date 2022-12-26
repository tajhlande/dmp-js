import './App.css';
import React, {Component} from "react";
import * as THREE from "three";
import GUI from "lil-gui";
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {GPUStatsPanel} from 'three/examples/jsm/utils/GPUStatsPanel.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {AxisProperties, createAxes} from "./axes";
import {Color, Vector3} from "three";
import {LineMaterial} from "three/addons/lines/LineMaterial";
import {LineGeometry} from "three/addons/lines/LineGeometry";
import {Line2} from "three/addons/lines/Line2";


let gui = new GUI();

const cubeScaleParam = {
    'cube scale': 1
};

const lorenzParams = {
    // lorenz used the values σ = 10, β = 8/3 and ρ = 28, so these are our defaults
    'sigma': 10,
    'beta': 8/3,
    'rho': 28,
    'dt': 0.01
};

const controlParams = {
    'running': false,
    'iterations': 0
}

let lzPos = new Vector3(0.1, 0.1, 0.1);

const lorenzMaterial = new LineMaterial( {
    color: new Color().setHex(0xFFFF00),
    linewidth: 0.0024, // in world units with size attenuation, pixels otherwise
    vertexColors: false,
    dashed: false,
    alphaToCoverage: true,
} );

const lorenzLineList = [];

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true});
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
let lorenzRoot = new THREE.Object3D();

function resetLorenz() {
    console.log("Resetting...");
    controlParams.running = false;
    //scene.remove(lorenzLineList);
    scene.remove(lorenzRoot);
    // for (const lzLine in lorenzLineList) {
    //     scene.remove(lzLine);
    // }
    lorenzRoot = new THREE.Object3D();
    scene.add(lorenzRoot);
    lorenzLineList.length = 0;
    controlParams.iterations = 0;
    lzPos = new Vector3(0.1, 0.1, 0.1);
    renderer.render(scene, camera);
}

controlParams.reset = resetLorenz;

function advanceLorentz(lPos, lParams) {
    const x_dot = lParams.sigma * (lPos.y - lPos.x);
    const y_dot = lPos.x * (lParams.rho - lPos.z) -  lPos.y
    const z_dot = lPos.x * lPos.y - lParams.beta * lPos.z;

    // console.log(`Lorenz gradient: (${x_dot}, ${y_dot}, ${z_dot})`);

    return new Vector3(
        lPos.x + (x_dot * lParams.dt),
        lPos.y + (y_dot * lParams.dt),
        lPos.z + (z_dot * lParams.dt)
    );
}

class App extends Component {
    componentDidMount() {

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
        //scene.add(cube);
        scene.add(...axes);
        scene.add(lorenzRoot);

        camera.position.z = 100;
        controls.update();


        let animate = function () {
            stats.begin();
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            if (controlParams.running) {
                const prevLzPos = lzPos;
                lzPos = advanceLorentz(lzPos, lorenzParams);
                //console.log(`New Lorentz point: (${lzPos.x}, ${lzPos.y}, ${lzPos.z}`);

                const lpts = [];
                lpts.push(prevLzPos.x, prevLzPos.y, prevLzPos.z);
                lpts.push(lzPos.x, lzPos.y, lzPos.z);
                //console.log(`Lorentz from (${lpts[0]}, ${lpts[1]}, ${lpts[2]})  to (${lpts[3]}, ${lpts[4]}, ${lpts[5]})`);

                const geometry = new LineGeometry(); // the old way: new THREE.BufferGeometry().setFromPoints(points);
                geometry.setPositions(lpts);
                const lorenzLine = new Line2(geometry, lorenzMaterial);
                lorenzLine.computeLineDistances();
                lorenzLine.scale.set(1, 1, 1);
                lorenzLineList.push(lorenzLine);
                lorenzRoot.add(lorenzLine);
                controlParams.iterations++;
            }

            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
            stats.end();

        };

        gui.add(cubeScaleParam, 'cube scale', 0.01, 10).onChange( function(val) {
            cube.scale.setScalar(val);
        });
        gui.add(controlParams, 'running').listen();
        gui.add(controlParams, 'iterations').disable().listen();
        gui.add(controlParams, 'reset');
        gui.add(lorenzParams, 'sigma', 0.0001, 20, 0.1);
        gui.add(lorenzParams, 'beta', 0.0001, 10, 0.001);
        gui.add(lorenzParams, 'rho', 0.0001, 100, 1);
        gui.add(lorenzParams, 'dt', 0.001, 0.03, 0.001);


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
