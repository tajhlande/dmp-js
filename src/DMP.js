import './DMP.css';
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

const log = loglevel.getLogger("dmp");
log.setLevel('debug');

const defaultStartPoint = new Vector3(0.1, 0.1, 0.1);
const defaultLinePoints = [defaultStartPoint.x, defaultStartPoint.y, defaultStartPoint.z,
    defaultStartPoint.x, defaultStartPoint.y, defaultStartPoint.z];

const defaultControlParams = {
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

const defaultStatsParams = {
    'main_camera_x': 0,
    'main_camera_y': 0,
    'main_camera_z': 0,
    'ride_camera_x': 0,
    'ride_camera_y': 0,
    'ride_camera_z': 0
}

/**
 * Generic superclass component with common functions for graph rendering, GUI, and simulation control.
 */
class DMP extends Component {
    gui;

    controlParams = {
        ...defaultControlParams
    };

    statsParams = {
        ...defaultStatsParams
    };

    graphPos;
    graphPts;
    graphMaterial;
    lineGeometry;
    graphLine;
    cursor;

    cursorGeometry;
    cursorMaterial;

    scene;
    renderer;
    mainCamera;
    rideCamera;
    graphRoot;
    axesRoot;
    rideCameraHelper;
    orbitControls;
    stats;
    prevGraphPos;

    /**
     * Standard React component constructor
     * @class
     * @param {Readonly<P>|P} props
     */
    constructor(props) {
        super(props);

        this.graphPos = new Vector3().copy(defaultStartPoint);
        this.prevGraphPos = new Vector3().copy(this.graphPos);
        this.graphPts = [];

        // bind callback methods for the two buttons
        this.controlParams.resetGraph = this.resetGraph;
        this.controlParams.resetParameters = this.resetFunctionParametersCallback;

        this.gui = new GUI();

        this.graphPts.push(...defaultLinePoints);

        this.graphMaterial = new LineMaterial( {
            color: new Color().setHex(this.controlParams.graphColor),
            linewidth: this.controlParams.lineThickness, // in world units with size attenuation, pixels otherwise
            opacity: this.controlParams.opacity,
            vertexColors: false,
            dashed: false,
            alphaToCoverage: true,
        } );

        this.lineGeometry = new LineGeometry(); // the old way: new THREE.BufferGeometry().setFromPoints(points);
        this.lineGeometry.setPositions(this.graphPts);

        this.graphLine = new Line2(this.lineGeometry, this.graphMaterial);
        this.graphLine.scale.setScalar(1);
        this.graphLine.computeLineDistances();

        this.cursorGeometry = new THREE.SphereGeometry( this.controlParams.lineThickness * 200, 8, 8 );
        this.cursorMaterial = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
        this.cursor = new THREE.Mesh(this.cursorGeometry, this.cursorMaterial );
        this.cursor.position.copy(this.graphPos);


        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.mainCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.rideCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.rideCamera.position.set(0, 0, 0);
        this.graphRoot = new THREE.Object3D();
        this.axesRoot = new THREE.Object3D();
        this.rideCameraHelper = new CameraHelper(this.rideCamera);


        this.scene.add(this.rideCamera);
        this.rideCameraHelper.visible = this.controlParams.showRideCameraFrustrum;
        this.scene.add(this.rideCameraHelper);

    }

    // GUI callback methods follow
    resetGraph = () => {
        log.debug("Resetting graph");
        this.controlParams.running = false;
        this.scene.remove(this.graphRoot);
        this.graphRoot = new THREE.Object3D();
        this.scene.add(this.graphRoot);
        this.graphPos.copy(defaultStartPoint);
        this.graphPts = [];
        this.graphPts.push(...defaultLinePoints);
        this.lineGeometry = new LineGeometry(); // the old way: new THREE.BufferGeometry().setFromPoints(points);
        this.lineGeometry.setPositions(this.graphPts);
        this.graphLine = new Line2(this.lineGeometry, this.graphMaterial);
        this.graphRoot.add(this.graphLine);
        this.controlParams.iterations = 0;
        this.controlParams.cursorTracking = 'manual';
        this.renderer.render(this.scene, this.mainCamera);
    }

    /**
     * Do not override this method, it is used to bind the callback for the button
     */
    resetFunctionParametersCallback = () => {
        this.controlParams.running = false;
        this.resetFunctionParameters();
    }

    /**
     * Override this for your specific function.
     */
    resetFunctionParameters = () => {
        log.warn("Override resetFunctionParameters()!!");
    }

    setGraphColor = () => {
        log.debug(`Setting graph color to ${this.controlParams.graphColor}`);
        this.graphMaterial.color = new Color().setHex(this.controlParams.graphColor);
    }

    setLineThickness = () => {
        log.debug(`Setting line thickness to ${this.controlParams.lineThickness}`);
        this.graphMaterial.linewidth = this.controlParams.lineThickness;
    }

    setOpacity = () => {
        log.debug(`Setting opacity to ${this.controlParams.opacity}`);
        this.graphMaterial.opacity = this.controlParams.opacity;
    }

    updateCursorVisibility = () => {
        log.debug(`Setting cursor visibility to ${this.controlParams.showCursor}`);
        this.cursor.visible = this.controlParams.showCursor;
    }

    updateRideCamHelperVisibility = () => {
        log.debug(`Setting ride camera helper visibility to ${this.controlParams.showRideCameraFrustrum}`);
        this.rideCameraHelper.visible = this.controlParams.showRideCameraFrustrum;
    }

    updateAxesVisibility = () => {
        log.debug(`Setting axes visibility to ${this.controlParams.showAxes}`);
        this.axesRoot.visible = this.controlParams.showAxes;
    }

    updateDimensions = () => {
        log.debug("Window resized");
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        this.mainCamera.aspect = window.innerWidth / window.innerHeight;
        this.mainCamera.updateProjectionMatrix();
        this.rideCamera.aspect = window.innerWidth / window.innerHeight;
        this.rideCamera.updateProjectionMatrix();
        this.rideCameraHelper.update();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        if (this.controlParams.cursorTracking === 'ride') {
            this.renderer.render(this.scene, this.rideCamera);
        } else {
            this.renderer.render(this.scene, this.mainCamera);
        }
    };

    animate = () => {
        this.stats.begin();

        if (this.controlParams.running && this.controlParams.iterations < this.controlParams.maxIterations) {
            for (let i = 0; i < this.controlParams.iterationsPerFrame && this.controlParams.iterations < this.controlParams.maxIterations; i++) {
                this.prevGraphPos = this.graphPos;
                this.graphPos = this.advanceGraph(this.graphPos);
                this.graphPts.push(this.graphPos.x, this.graphPos.y, this.graphPos.z);
                this.controlParams.iterations++;
            }
            this.lineGeometry = new LineGeometry();
            this.lineGeometry.setPositions(this.graphPts);
            this.graphRoot.remove(this.graphLine);
            this.graphLine = new Line2(this.lineGeometry, this.graphMaterial);
            this.graphLine.scale.setScalar(1);
            this.graphLine.computeLineDistances();
            this.graphRoot.add(this.graphLine);
            this.cursor.position.copy(this.graphPos);
        }
        else if (this.controlParams.iterations >= this.controlParams.maxIterations) {
            this.controlParams.running = false;
        }

        // compute ride camera position and orientation regardless
        let cameraSetback = new Vector3().subVectors(this.prevGraphPos, this.graphPos);
        cameraSetback.normalize();
        cameraSetback.multiplyScalar(this.controlParams.rideCameraZoom);
        // log.debug(`Previous Lorentz position: (${prevLzPos.x}, ${prevLzPos.y}, ${prevLzPos.z})`);
        // log.debug(`Lorentz position: (${lzPos.x}, ${lzPos.y}, ${lzPos.z})`);
        // log.debug(`Ride cam setback position & length: (${cameraSetback.x}, ${cameraSetback.y}, ${cameraSetback.z}) ${cameraSetback.length()}`);
        let rideCameraPos = new Vector3().addVectors(this.prevGraphPos, cameraSetback);
        this.rideCamera.position.copy(rideCameraPos);
        this.rideCamera.lookAt(this.graphPos);
        this.statsParams.ride_camera_x = this.rideCamera.position.x;
        this.statsParams.ride_camera_y = this.rideCamera.position.y;
        this.statsParams.ride_camera_z = this.rideCamera.position.z;
        // log.debug(`Ride cam actual position: (${rideCamera.position.x}, ${rideCamera.position.y}, ${rideCamera.position.z})`);
        this.rideCameraHelper.update();

        // align camera to cursor tracking parameter
        if (this.controlParams.cursorTracking === 'follow') {
            this.orbitControls.target.copy(this.graphPos);
            this.orbitControls.update();
            this.statsParams.main_camera_x = this.mainCamera.position.x;
            this.statsParams.main_camera_y = this.mainCamera.position.y;
            this.statsParams.main_camera_z = this.mainCamera.position.z;
            this.renderer.render(this.scene, this.mainCamera);
        } else if (this.controlParams.cursorTracking === 'ride') {
            this.renderer.render(this.scene, this.rideCamera);
        } else {  // manual
            this.statsParams.main_camera_x = this.mainCamera.position.x;
            this.statsParams.main_camera_y = this.mainCamera.position.y;
            this.statsParams.main_camera_z = this.mainCamera.position.z;
            this.renderer.render(this.scene, this.mainCamera);
        }

        // tell the browser to call this method again
        requestAnimationFrame(this.animate);

        this.stats.end();
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);

        // wanted to implement tap to start/stop the simulation on touch devices, but
        // there are two problems with the line commented out below:
        // 1) the event handler still receives and listens to events handled by the GUI
        // 2) this needs to be responsive to a tap event and not other kinds of touch
        // a third party library is probably needed here
        //window.addEventListener('touchstart', this.toggleRunning);
        this.orbitControls = new OrbitControls(this.mainCamera, this.renderer.domElement);

        // renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.setClearColor( 0x000000, 1.0 );
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // to make this three.js code React friendly, we don't do this:
        // document.body.appendChild( renderer.domElement );
        // instead, we use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild(this.renderer.domElement);

        // set up three.js scene
        const axisProps = new AxisProperties();
        const axes = createAxes(axisProps);

        this.axesRoot.add(...axes);
        this.scene.add(this.axesRoot);
        this.scene.add(this.graphRoot);
        this.graphRoot.add(this.graphLine);
        this.scene.add(this.cursor);

        this.mainCamera.position.z = 120;
        this.orbitControls.update();

        // set up gui
        this.gui.title("Controls");

        const simControlsFolder = this.gui.addFolder('Simulation');
        simControlsFolder.add(this.controlParams, 'running').name("Running").listen();
        simControlsFolder.add(this.controlParams, 'iterations').name("Iterations").disable().listen();
        simControlsFolder.add(this.controlParams, 'maxIterations', [1000, 10000, 100000]).name("Max Iterations");
        simControlsFolder.add(this.controlParams, 'iterationsPerFrame', [1, 5, 10, 25, 100]).name("Iterations Per Frame");
        simControlsFolder.add(this.controlParams, 'resetGraph').name("Reset Graph");

        const viewControlsFolder = this.gui.addFolder('View');
        viewControlsFolder.add(this.controlParams, 'lineThickness', 0.0001, 0.0100, 0.0001).name("Line Thickness").onChange(this.setLineThickness);
        viewControlsFolder.addColor(this.controlParams, 'graphColor').name("Graph Color").listen().onChange(this.setGraphColor);
        viewControlsFolder.add(this.controlParams, 'opacity', 0.01, 1.0, 0.01).name("Opacity").onChange(this.setOpacity);
        viewControlsFolder.add(this.controlParams, 'showAxes').name("Show Axes").onChange(this.updateAxesVisibility);
        viewControlsFolder.add(this.controlParams, 'showCursor').name("Show Cursor").onChange(this.updateCursorVisibility);
        viewControlsFolder.add(this.controlParams, 'cursorTracking', ['manual', 'follow', 'ride']).name("Cursor Tracking");
        viewControlsFolder.add(this.controlParams, 'showRideCameraFrustrum').name("Show Ride Cam Frustrum").onChange(this.updateRideCamHelperVisibility);
        viewControlsFolder.add(this.controlParams, 'rideCameraZoom', 5, 100, 1).name("Ride Camera Zoom");

        let paramsControlFolder = this.createFunctionParamsGuiFolder(this.gui);
        paramsControlFolder.add(this.controlParams, 'resetParameters').name("Reset Parameters");

        const camPositionsFolder = this.gui.addFolder('Camera Positions');
        camPositionsFolder.add(this.statsParams, 'main_camera_x').name('Main Camera X').disable().listen();
        camPositionsFolder.add(this.statsParams, 'main_camera_y').name('Main Camera Y').disable().listen();
        camPositionsFolder.add(this.statsParams, 'main_camera_z').name('Main Camera Z').disable().listen();
        camPositionsFolder.add(this.statsParams, 'ride_camera_x').name('Ride Camera X').disable().listen();
        camPositionsFolder.add(this.statsParams, 'ride_camera_y').name('Ride Camera Y').disable().listen();
        camPositionsFolder.add(this.statsParams, 'ride_camera_z').name('Ride Camera Z').disable().listen();
        camPositionsFolder.close();

        // set up framerate & other stats to be visible
        this.stats = new Stats();
        document.body.appendChild(this.stats.domElement);
        const gpuPanel = new GPUStatsPanel(this.renderer.getContext());
        this.stats.addPanel(gpuPanel);
        this.stats.showPanel(0);

        // start the three.js animation
        this.animate();
    }

    /**
     * Advance the dynamic function.
     * Override this method to implement it differently.
     *
     * @param pos The current position, as a `Vector3`
     * @returns {Vector3}  The new position
     */
    advanceGraph(pos) {
        log.warn("Override advanceGraph(pos)!");
    }

    /**
     * Override this method to add formula specific parameters.
     *
     * @param gui The gui object to which we are adding our specific folders
     * @return the new folder created
     */
    createFunctionParamsGuiFolder(gui) {
        log.warn("Override createFunctionParamsGuiFolder(gui)!");
        return gui.addFolder("Function Parameters");
    }

    /**
     * Override this to display a custom link in the footer for the specific dynamic function
     * @returns {{text: string, url: string}}
     */
    getFooterText() {
        log.info("Override getFooterText()!");
        return {
            url: "https://en.wikipedia.org/wiki/Dynamical_system",
            text: "What are dynamical systems?"
        }
    }

    render() {
        const footer = this.getFooterText();
        return (
            <div>
                <div ref={ref => (this.mount = ref)}/>
                <Footer url={footer.url} text={footer.text} />
            </div>
        )
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions, false)
    }
}

export default DMP;
