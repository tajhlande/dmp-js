import './App.css';
import React, {Component} from "react";
import * as THREE from "three";
import GUI from "lil-gui";
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {GPUStatsPanel} from 'three/examples/jsm/utils/GPUStatsPanel.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {AxisProperties, createAxes} from "./axes";
import {CameraHelper, Color, Vector3} from "three";
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial';
import {LineGeometry} from 'three/examples/jsm/lines/LineGeometry';
import {Line2} from 'three/examples/jsm/lines/Line2';
import * as loglevel from "loglevel";
import Footer from "./Footer";

const log = loglevel.getLogger("lorenz");
log.setLevel('debug');

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
    'showAxes': true,
    'showCursor' : true,
    'cursorTracking': 'manual',
    'showRideCameraFrustrum': false,
    'rideCameraZoom': 10
}

const statsParams = {
    'main_camera_x': 0,
    'main_camera_y': 0,
    'main_camera_z': 0,
    'ride_camera_x': 0,
    'ride_camera_y': 0,
    'ride_camera_z': 0
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
const mainCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const rideCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
rideCamera.position.set(0, 0, 0);
let lorenzRoot = new THREE.Object3D();
let axesRoot = new THREE.Object3D();
scene.add(rideCamera);
const rideCameraHelper = new CameraHelper(rideCamera);
rideCameraHelper.visible = controlParams.showRideCameraFrustrum;
scene.add(rideCameraHelper);


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
    controlParams.cursorTracking = 'manual';
    renderer.render(scene, mainCamera);
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

function updateRideCamHelperVisibility() {
    log.debug(`Setting ride camera helper visibility to ${controlParams.showRideCameraFrustrum}`);
    rideCameraHelper.visible = controlParams.showRideCameraFrustrum;
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
        mainCamera.aspect = window.innerWidth / window.innerHeight;
        mainCamera.updateProjectionMatrix();
        rideCamera.aspect = window.innerWidth / window.innerHeight;
        rideCamera.updateProjectionMatrix();
        rideCameraHelper.update();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (controlParams.cursorTracking === 'ride') {
            renderer.render(scene, rideCamera);
        } else {
            renderer.render(scene, mainCamera);
        }
    };

    // toggleRunning = () => {
    //     log.debug("Window touch started");
    //     controlParams.running = !controlParams.running;
    // }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);

        // two problems with the line commented out below:
        // 1) still listens to events handled by the GUI
        // 2) this needs to be responsive to a tap event and not other kinds of touch
        //window.addEventListener('touchstart', this.toggleRunning);
        const orbitControls = new OrbitControls(mainCamera, renderer.domElement);

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

        mainCamera.position.z = 120;
        orbitControls.update();

        let prevLzPos = lzPos;
        let animate = function () {
            stats.begin();

            if (controlParams.running && controlParams.iterations < controlParams.maxIterations) {
                for (let i = 0; i < controlParams.iterationsPerFrame && controlParams.iterations < controlParams.maxIterations; i++) {
                    prevLzPos = lzPos;
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

            // compute ride camera position and orientation regardless
            let cameraSetback = new Vector3().subVectors(prevLzPos, lzPos);
            cameraSetback.normalize();
            cameraSetback.multiplyScalar(controlParams.rideCameraZoom);
            // log.debug(`Previous Lorentz position: (${prevLzPos.x}, ${prevLzPos.y}, ${prevLzPos.z})`);
            // log.debug(`Lorentz position: (${lzPos.x}, ${lzPos.y}, ${lzPos.z})`);
            // log.debug(`Ride cam setback position & length: (${cameraSetback.x}, ${cameraSetback.y}, ${cameraSetback.z}) ${cameraSetback.length()}`);
            let rideCameraPos = new Vector3().addVectors(prevLzPos, cameraSetback);
            rideCamera.position.copy(rideCameraPos);
            rideCamera.lookAt(lzPos);
            statsParams.ride_camera_x = rideCamera.position.x;
            statsParams.ride_camera_y = rideCamera.position.y;
            statsParams.ride_camera_z = rideCamera.position.z;
            // log.debug(`Ride cam actual position: (${rideCamera.position.x}, ${rideCamera.position.y}, ${rideCamera.position.z})`);
            rideCameraHelper.update();

            // align camera to cursor tracking parameter
            if (controlParams.cursorTracking === 'follow') {
                orbitControls.target.copy(lzPos);
                orbitControls.update();
                statsParams.main_camera_x = mainCamera.position.x;
                statsParams.main_camera_y = mainCamera.position.y;
                statsParams.main_camera_z = mainCamera.position.z;
                renderer.render(scene, mainCamera);
            } else if (controlParams.cursorTracking === 'ride') {
                renderer.render(scene, rideCamera);
            } else {  // manual
              //  controls.target.set(0, 0, 0);
                statsParams.main_camera_x = mainCamera.position.x;
                statsParams.main_camera_y = mainCamera.position.y;
                statsParams.main_camera_z = mainCamera.position.z;
                renderer.render(scene, mainCamera);
            }

            requestAnimationFrame(animate);
            stats.end();

        };

        gui.title("Controls");
        const simControlsFolder = gui.addFolder('Simulation');
        simControlsFolder.add(controlParams, 'running').name("Running").listen();
        simControlsFolder.add(controlParams, 'iterations').name("Iterations").disable().listen();
        simControlsFolder.add(controlParams, 'maxIterations', [1000, 10000, 100000]).name("Max Iterations");
        simControlsFolder.add(controlParams, 'iterationsPerFrame', [1, 5, 10, 25, 100]).name("Iterations Per Frame");
        simControlsFolder.add(controlParams, 'resetGraph').name("Reset Graph");
        const viewControlsFolder = gui.addFolder('View');
        viewControlsFolder.add(controlParams, 'lineThickness', 0.0001, 0.0100, 0.0001).name("Line Thickness").onChange(setLineThickness);
        viewControlsFolder.addColor(controlParams, 'graphColor').name("Graph Color").listen().onChange(setGraphColor);
        viewControlsFolder.add(controlParams, 'opacity', 0.01, 1.0, 0.01).name("Opacity").onChange(setOpacity);
        viewControlsFolder.add(controlParams, 'showAxes').name("Show Axes").onChange(updateAxesVisibility);
        viewControlsFolder.add(controlParams, 'showCursor').name("Show Cursor").onChange(updateCursorVisibility);
        viewControlsFolder.add(controlParams, 'cursorTracking', ['manual', 'follow', 'ride']).name("Cursor Tracking");
        viewControlsFolder.add(controlParams, 'showRideCameraFrustrum').name("Show Ride Cam Frustrum").onChange(updateRideCamHelperVisibility);
        viewControlsFolder.add(controlParams, 'rideCameraZoom', 5, 100, 1).name("Ride Camera Zoom");
        const parameterControlsFolder = gui.addFolder('Formula Parameters');
        parameterControlsFolder.add(lorenzParams, 'sigma', 0.0001, 20, 0.1).name("&sigma;").listen();
        parameterControlsFolder.add(lorenzParams, 'beta', 0.0001, 10, 0.001).name("&beta;").listen();
        parameterControlsFolder.add(lorenzParams, 'rho', 0.0001, 100, 1).name("&rho;").listen();
        parameterControlsFolder.add(lorenzParams, 'dt', 0.001, 0.03, 0.001).name("&delta;t").listen();
        parameterControlsFolder.add(controlParams, 'resetParameters').name("Reset Parameters");
        const camPositionsFolder = gui.addFolder('Camera Positions');
        camPositionsFolder.add(statsParams, 'main_camera_x').name('Main Camera X').disable().listen();
        camPositionsFolder.add(statsParams, 'main_camera_y').name('Main Camera Y').disable().listen();
        camPositionsFolder.add(statsParams, 'main_camera_z').name('Main Camera Z').disable().listen();
        camPositionsFolder.add(statsParams, 'ride_camera_x').name('Ride Camera X').disable().listen();
        camPositionsFolder.add(statsParams, 'ride_camera_y').name('Ride Camera Y').disable().listen();
        camPositionsFolder.add(statsParams, 'ride_camera_z').name('Ride Camera Z').disable().listen();
        camPositionsFolder.close();


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
