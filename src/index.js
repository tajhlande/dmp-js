import React, { Component } from "react";
import ReactDOM from 'react-dom';
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




class App extends Component {
    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        // renderer.setClearColor( 0x000000, 1.0 );
        renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshMatcapMaterial({color: 0x00ffff});

        const redLineMaterial = new THREE.LineBasicMaterial( { color: 0xff0000, linewidth:1 } );
        const greenLineMaterial = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        const greenColor = new THREE.Color();
        greenColor.setHex(0x00FF00);
        const blueLineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );

        const axisLength = 3;

        const xPoints = [];
        xPoints.push( new THREE.Vector3( -axisLength, 0, 0 ) );
        xPoints.push( new THREE.Vector3( axisLength, 0, 0 ) );
        const xGeometry = new THREE.BufferGeometry().setFromPoints(xPoints);
        const xLine = new THREE.Line(xGeometry, redLineMaterial);

        const yPoints = [];
        const yColors = [];
        yPoints.push(  0, -axisLength, 0  );
        yColors.push( greenColor.r, greenColor.g, greenColor.b );
        yPoints.push(0, 0,  0);
        yColors.push( greenColor.r, greenColor.g, greenColor.b );
        yPoints.push(  0, axisLength, 0  );
        yColors.push( greenColor.r, greenColor.g, greenColor.b );
        const newGreenLineMaterial = new LineMaterial( {
            color: 0xffffff,
            linewidth: 0.002, // in world units with size attenuation, pixels otherwise
            vertexColors: true,
            //resolution:  // to be set by renderer, eventually
            dashed: false,
            alphaToCoverage: true,

        } );
        const yGeometry = new LineGeometry(); //new THREE.BufferGeometry().setFromPoints(yPoints);
        yGeometry.setPositions(yPoints );
        yGeometry.setColors( yColors );

        const yLine = new Line2(yGeometry, newGreenLineMaterial);
        yLine.computeLineDistances();
        yLine.scale.set( 1, 1, 1 );

        const zPoints = [];
        zPoints.push( new THREE.Vector3( 0, 0, -axisLength ) );
        zPoints.push( new THREE.Vector3( 0, 0, axisLength ) );
        const zGeometry = new THREE.BufferGeometry().setFromPoints(zPoints);
        const zLine = new THREE.Line(zGeometry, blueLineMaterial);

        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add( cube, xLine, yLine, zLine );

        camera.position.z = 5;

        const controls = new OrbitControls( camera, renderer.domElement );


        let animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };


        animate();
    }
    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);