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
import * as loglevel from "loglevel";
import Footer from "./Footer";

const log = loglevel.getLogger("lorenz");

let gui = new GUI();

const defaultStartPoint = new Vector3(0.1, 0.1, 0.1);
const defaultLinePoints = [defaultStartPoint.x, defaultStartPoint.y, defaultStartPoint.z,
    defaultStartPoint.x, defaultStartPoint.y, defaultStartPoint.z];

const defaultLorenzParams = {
    // lorenz used the values σ = 10, β = 8/3 and ρ = 28, so these are our defaults
    'sigma': 10,
    'beta': 8/3,
    'rho': 28,
    'dt': 0.01
};
const lorenzParams = {
    ...defaultLorenzParams
};

const controlParams = {
    'running': false,
    'iterations': 0,
    'maxIterations': 10000,
    'iterationsPerFrame': 1,
    'lineThickness': 0.0024,
    'opacity': 1.0,
    'graphColor' : 0xFFFF00,
    'showCursor' : true,
    'showAxes': true
}

let lzPos = new Vector3().copy( defaultStartPoint);
let lpts = [];
lpts.push(...defaultLinePoints);

const lorenzMaterial = new LineMaterial( {
    color: new Color().setHex(controlParams.graphColor),
    linewidth: controlParams.lineThickness, // in world units with size attenuation, pixels otherwise
    opacity: controlParams.opacity,
    vertexColors: false,
    dashed: false,
    alphaToCoverage: true,
} );
let lineGeometry = new LineGeometry(); // the old way: new THREE.BufferGeometry().setFromPoints(points);
lineGeometry.setPositions(lpts);
let lorenzLine = new Line2(lineGeometry, lorenzMaterial);
lorenzLine.scale.setScalar(1);
lorenzLine.computeLineDistances();

const cursorGeometry = new THREE.SphereGeometry( controlParams.lineThickness * 200, 8, 8 );
const cursorMaterial = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
const cursor = new THREE.Mesh( cursorGeometry, cursorMaterial );
cursor.position.copy(lzPos);

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true});
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
let lorenzRoot = new THREE.Object3D();
let axesRoot = new THREE.Object3D();


function resetLorenzGraph() {
    log.debug("Resetting graph");
    controlParams.running = false;
    scene.remove(lorenzRoot);
    lorenzRoot = new THREE.Object3D();
    scene.add(lorenzRoot);
    lzPos.copy(defaultStartPoint);
    lpts = [];
    lpts.push(...defaultLinePoints);
    lineGeometry = new LineGeometry(); // the old way: new THREE.BufferGeometry().setFromPoints(points);
    lineGeometry.setPositions(lpts);
    lorenzLine = new Line2(lineGeometry, lorenzMaterial);
    lorenzRoot.add(lorenzLine);
    controlParams.iterations = 0;

    renderer.render(scene, camera);
}

function resetLorenzParameters() {
    log.debug("Resetting Lorenz parameters to defaults");
    controlParams.running = false;
    lorenzParams.sigma = defaultLorenzParams.sigma;
    lorenzParams.beta = defaultLorenzParams.beta;
    lorenzParams.rho = defaultLorenzParams.rho;
    lorenzParams.dt = defaultLorenzParams.dt;
}

function setGraphColor() {
    log.debug(`Setting graph color to ${controlParams.graphColor}`);
    lorenzMaterial.color = new Color().setHex(controlParams.graphColor);
}

function setLineThickness() {
    log.debug(`Setting line thickness to ${controlParams.lineThickness}`);
    lorenzMaterial.linewidth = controlParams.lineThickness;
}

function setOpacity() {
    log.debug(`Setting opacity to ${controlParams.opacity}`);
    lorenzMaterial.opacity = controlParams.opacity;
}

function updateCursorVisibility() {
    log.debug(`Setting cursor visibility to ${controlParams.showCursor}`);
    cursor.visible = controlParams.showCursor;
}

function updateAxesVisibility() {
    log.debug(`Setting axes visibility to ${controlParams.showAxes}`);
    axesRoot.visible = controlParams.showAxes;
}


// set up gui button callbacks
controlParams.resetGraph = resetLorenzGraph;
controlParams.resetParameters = resetLorenzParameters;

function advanceLorenz(lPos, lParams) {
    const x_dot = lParams.sigma * (lPos.y - lPos.x);
    const y_dot = lPos.x * (lParams.rho - lPos.z) -  lPos.y
    const z_dot = lPos.x * lPos.y - lParams.beta * lPos.z;

    // log.debug(`Lorenz gradient: (${x_dot}, ${y_dot}, ${z_dot})`);

    return new Vector3(
        lPos.x + (x_dot * lParams.dt),
        lPos.y + (y_dot * lParams.dt),
        lPos.z + (z_dot * lParams.dt)
    );
}

class App extends Component {

    updateDimensions = () => {
        log.debug("Window resized");
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
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

        axesRoot.add(...axes);
        scene.add(axesRoot);
        scene.add(lorenzRoot);
        lorenzRoot.add(lorenzLine);
        scene.add(cursor);

        camera.position.z = 120;
        controls.update();


        let animate = function () {
            stats.begin();

            if (controlParams.running && controlParams.iterations < controlParams.maxIterations) {
                for (let i = 0; i < controlParams.iterationsPerFrame && controlParams.iterations < controlParams.maxIterations; i++) {
                    lzPos = advanceLorenz(lzPos, lorenzParams);
                    lpts.push(lzPos.x, lzPos.y, lzPos.z);
                    controlParams.iterations++;
                }
                lineGeometry = new LineGeometry();
                lineGeometry.setPositions(lpts);
                lorenzRoot.remove(lorenzLine);
                lorenzLine = new Line2(lineGeometry, lorenzMaterial);
                lorenzLine.scale.setScalar(1);
                lorenzLine.computeLineDistances();
                lorenzRoot.add(lorenzLine);
                cursor.position.copy(lzPos);
            }
            else if (controlParams.iterations >= controlParams.maxIterations) {
                controlParams.running = false;
            }

            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
            stats.end();

        };

        gui.title("Lorenz Attractor Controls");
        gui.add(controlParams, 'running').name("Running").listen();
        gui.add(controlParams, 'iterations').name("Iterations").disable().listen();
        gui.add(controlParams, 'maxIterations', [1000, 10000, 100000]).name("Max Iterations");
        gui.add(controlParams, 'iterationsPerFrame', [1, 5, 10, 25, 100]).name("Iterations Per Frame");
        gui.add(controlParams, 'lineThickness', 0.0001, 0.0100, 0.0001).name("Line Thickness").onChange(setLineThickness);
        gui.addColor(controlParams, 'graphColor').name("Graph Color").listen().onChange(setGraphColor);
        gui.add(controlParams, 'opacity', 0.01, 1.0, 0.01).name("Opacity").onChange(setOpacity);
        gui.add(controlParams, 'showCursor').name("Show Cursor").onChange(updateCursorVisibility);
        gui.add(controlParams, 'showAxes').name("Show Axes").onChange(updateAxesVisibility);
        gui.add(controlParams, 'resetGraph').name("Reset Graph");
        gui.add(lorenzParams, 'sigma', 0.0001, 20, 0.1).name("&sigma;").listen();
        gui.add(lorenzParams, 'beta', 0.0001, 10, 0.001).name("&beta;").listen();
        gui.add(lorenzParams, 'rho', 0.0001, 100, 1).name("&rho;").listen();
        gui.add(lorenzParams, 'dt', 0.001, 0.03, 0.001).name("&delta;t").listen();
        gui.add(controlParams, 'resetParameters').name("Reset Parameters");


        const stats = new Stats();
        document.body.appendChild(stats.domElement);

        const gpuPanel = new GPUStatsPanel(renderer.getContext());
        stats.addPanel(gpuPanel);
        stats.showPanel(0);


        animate();
    }

    render() {
        return (
            <div>
                <div ref={ref => (this.mount = ref)}/>
                <Footer />
            </div>
        )
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions, false)
    }
}

export default App;
