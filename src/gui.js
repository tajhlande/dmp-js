import GUI from "lil-gui"
import * as THREE from "three";

export function initGui(cube = new THREE.Mesh()) {

    let gui = new GUI();

    const param = {
        'cube scale': 1
    };

    gui.add(param, 'cube scale', 0.01, 10).onChange( function(val) {
        cube.scale= new THREE.Vector3(val, val, val);
    });

    return gui;
}
