import './App.css';
import React, {Component} from "react";
import * as THREE from "three";
import GUI from "lil-gui";
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {GPUStatsPanel} from 'three/examples/jsm/utils/GPUStatsPanel.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {AxisProperties, createAxes} from "./axes";
import {Color, Vector3} from "three";
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial';
import {LineGeometry} from 'three/examples/jsm/lines/LineGeometry';
import {Line2} from 'three/examples/jsm/lines/Line2';


let gui = new GUI();

const lorenzParams = {
    // lorenz used the values σ = 10, β = 8/3 and ρ = 28, so these are our defaults
    'sigma': 10,
    'beta': 8/3,
    'rho': 28,
    'dt': 0.01
};

const controlParams = {
    'running': false,
    'iterations': 0,
    'maxIterations': 100000,
    'iterationsPerFrame': 1,
    'graphColor' : 0xFFFF00
}

let lzPos = new Vector3(0.1, 0.1, 0.1);

const lorenzMaterial = new LineMaterial( {
    color: new Color().setHex(controlParams.graphColor),
    linewidth: 0.0024, // in world units with size attenuation, pixels otherwise
    vertexColors: false,
    dashed: false,
    alphaToCoverage: true,
} );

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true});
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
let lorenzRoot = new THREE.Object3D();

function resetLorenzGraph() {
    console.log("Resetting graph");
    controlParams.running = false;
    scene.remove(lorenzRoot);
    lorenzRoot = new THREE.Object3D();
    scene.add(lorenzRoot);
    controlParams.iterations = 0;
    lzPos = new Vector3(0.1, 0.1, 0.1);
    renderer.render(scene, camera);
}

function resetLorenzParameters() {
    console.log("Resetting Lorenz parameters to defaults");
    controlParams.running = false;
    lorenzParams.sigma = 10;
    lorenzParams.beta = 8/3;
    lorenzParams.rho = 28;
    lorenzParams.dt = 0.01;
}

function setGraphColor() {
    console.log(`Setting graph color to ${controlParams.graphColor}`);
    lorenzMaterial.color = new Color().setHex(controlParams.graphColor);
}

controlParams.resetGraph = resetLorenzGraph;
controlParams.resetParameters = resetLorenzParameters;

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

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        camera.aspect = window.innerWidth / window.innerHeight;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        const controls = new OrbitControls(camera, renderer.domElement);

//      renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.setClearColor( 0x000000, 1.0 );
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild(renderer.domElement);

        const axisProps = new AxisProperties();
        const axes = createAxes(axisProps);

        scene.add(...axes);
        scene.add(lorenzRoot);

        camera.position.z = 120;
        controls.update();


        let animate = function () {
            stats.begin();

            if (controlParams.running && controlParams.iterations < controlParams.maxIterations) {
                for (let i = 0; i < controlParams.iterationsPerFrame && controlParams.iterations < controlParams.maxIterations; i++) {
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
                    lorenzRoot.add(lorenzLine);
                    controlParams.iterations++;
                }
            }
            else if (controlParams.iterations >= controlParams.maxIterations) {
                controlParams.running = false;
            }

            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
            stats.end();

        };

        gui.title("Lorentz Attractor Controls");
        gui.add(controlParams, 'running').name("Running").listen();
        gui.addColor(controlParams, 'graphColor').name("Graph Color").listen().onChange(setGraphColor);
        gui.add(controlParams, 'iterations').name("Iterations").disable().listen();
        gui.add(controlParams, 'maxIterations', [1000, 10000, 100000, 1000000]).name("Max Iterations");
        gui.add(controlParams, 'iterationsPerFrame', [1, 5, 10, 25]).name("Iterations Per Frame");
        gui.add(controlParams, 'resetGraph').name("Reset Graph");
        gui.add(lorenzParams, 'sigma', 0.0001, 20, 0.1).listen();
        gui.add(lorenzParams, 'beta', 0.0001, 10, 0.001).listen();
        gui.add(lorenzParams, 'rho', 0.0001, 100, 1).listen();
        gui.add(lorenzParams, 'dt', 0.001, 0.03, 0.001).listen();
        gui.add(controlParams, 'resetParameters').name("Reset Parameters");


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
