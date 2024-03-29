import {Color, TextureLoader, SpriteMaterial, Sprite} from "three";
import {Line2} from "three/examples/jsm/lines/Line2";
import {LineGeometry} from "three/examples/jsm/lines/LineGeometry";
import {LineMaterial} from "three/examples/jsm/lines/LineMaterial";
import * as loglevel from 'loglevel';
import x_sprite_path from "./sprites/X-sprite.png";
import y_sprite_path from "./sprites/Y-sprite.png";
import z_sprite_path from "./sprites/Z-sprite.png";

const log = loglevel.getLogger("axes");

log.setLevel("debug");

export class AxisProperties {
    constructor() {
        //defaults
        this.axisLength = 50; // from origin
        this.axisThickness = 0.0012;
        this.xColor = new Color().setHex(0xFF0000);
        this.yColor = new Color().setHex(0x00FF00);
        this.zColor = new Color().setHex(0x2020FF);
        this.ticksEvery = 10;
        this.tickLength = 0.4; // from axis
        this.tickThickness = 0.0012;
    }
}

function createAxisLineFromPoints(points, /*colors,*/ axisMaterial) {
    const geometry = new LineGeometry(); // the old way: new THREE.BufferGeometry().setFromPoints(points);
    geometry.setPositions(points);
    const axisLine = new Line2(geometry, axisMaterial);
    axisLine.computeLineDistances();
    axisLine.scale.set(1, 1, 1);
    return axisLine;
}

function createXAxisLine(axisProps = new AxisProperties()) {
    const points = [];
    points.push(-axisProps.axisLength, 0, 0);
    points.push(0, 0, 0);
    points.push(axisProps.axisLength, 0, 0);
    const axisMaterial = new LineMaterial( {
        color: axisProps.xColor,
        linewidth: axisProps.axisThickness, // in world units with size attenuation, pixels otherwise
        vertexColors: false,
        dashed: false,
        alphaToCoverage: true,
    } );
    return createAxisLineFromPoints(points, axisMaterial);
}

function createYAxisLine(axisProps = new AxisProperties()) {
    const points = [];
    points.push(0, -axisProps.axisLength, 0);
    points.push(0, 0, 0);
    points.push(0, axisProps.axisLength, 0);
    const axisMaterial = new LineMaterial( {
        color: axisProps.yColor,
        linewidth: axisProps.axisThickness, // in world units with size attenuation, pixels otherwise
        vertexColors: false,
        dashed: false,
        alphaToCoverage: true,
    } );
    return createAxisLineFromPoints(points, axisMaterial);
}

function createZAxisLine(axisProps = new AxisProperties()) {
    const points = [];
    points.push(0, 0, -axisProps.axisLength);
    points.push(0, 0, 0);
    points.push(0, 0, axisProps.axisLength);
    const axisMaterial = new LineMaterial( {
        color: axisProps.zColor,
        linewidth: axisProps.axisThickness, // in world units with size attenuation, pixels otherwise
        vertexColors: false,
        dashed: false,
        alphaToCoverage: true,
    } );
    return createAxisLineFromPoints(points, axisMaterial);
}


function createTickLine(points, color, tickThickness) {
    const tickMaterial = new LineMaterial( {
        color: color,
        linewidth: tickThickness, // in world units with size attenuation, pixels otherwise
        vertexColors: false,
        dashed: false,
        alphaToCoverage: true,
    } );
    const geometry = new LineGeometry(); // the old way: new THREE.BufferGeometry().setFromPoints(points);
    geometry.setPositions(points);
    const tickLine = new Line2(geometry, tickMaterial);
    tickLine.computeLineDistances();
    tickLine.scale.set(1, 1, 1);
    return tickLine;
}

function createXAxisTicks(axisProps = new AxisProperties()) {
    // log.debug("In createXAxisTicks()");
    const axisTicks = [];

    // number of ticks along one axis from origin to tip
    const numTicks = Math.floor(axisProps.axisLength / axisProps.ticksEvery);
    // log.debug(`Axis length: ${axisProps.axisLength}`);
    // log.debug(`Ticks every: ${axisProps.ticksEvery}`);
    if (numTicks < 1) {
        log.info("No ticks to mark");
        return axisTicks;
    }
    log.info(`Number of ticks: ${numTicks}`);
    const fullTickLength = axisProps.axisThickness + axisProps.tickLength * 2;
    // log.debug(`Axis thickness: ${axisProps.axisThickness}`);
    // log.debug(`Tick length: ${axisProps.tickLength}`);
    // log.debug(`Full Tick length: ${fullTickLength}`);
    // log.debug(`Tick thickness: ${axisProps.tickThickness}`);

    for (let i = -numTicks; i <= numTicks; i++) {
        if (i === 0) continue; // don't need a tick at the origin
        //log.debug(`Pass ${i}`);
        // criss-cross ticks
        {
            const points = [];
            points.push(axisProps.ticksEvery * i, -fullTickLength, 0);
            points.push(axisProps.ticksEvery * i, fullTickLength,  0);
            //log.debug(`Cross 1 from (${points[0]}, ${points[1]}, ${points[2]}) to (${points[3]}, ${points[4]}, ${points[5]})`)
            axisTicks.push(createTickLine(points, axisProps.xColor, axisProps.tickThickness));
        }
        {
            const points = [];
            points.push(axisProps.ticksEvery * i, 0, -fullTickLength);
            points.push(axisProps.ticksEvery * i, 0, fullTickLength);
            //log.debug(`Cross 2 from (${points[0]}, ${points[1]}, ${points[2]}) to (${points[3]}, ${points[4]}, ${points[5]})`)
            axisTicks.push(createTickLine(points, axisProps.xColor, axisProps.tickThickness));
        }
    }
    return axisTicks;
}

function createYAxisTicks(axisProps = new AxisProperties()) {
    const axisTicks = [];

    // number of ticks along one axis from origin to tip
    const numTicks = Math.floor(axisProps.axisLength / axisProps.ticksEvery);
    if (numTicks < 1) {
        return axisTicks;
    }
    const fullTickLength = axisProps.axisThickness + axisProps.tickLength * 2;

    for (let i = -numTicks; i <= numTicks; i++) {
        if (i === 0) continue; // don't need a tick at the origin
        // criss-cross ticks
        {
            const points = [];
            points.push(-fullTickLength, axisProps.ticksEvery * i, 0);
            points.push(fullTickLength,  axisProps.ticksEvery * i, 0);
            axisTicks.push(createTickLine(points, axisProps.yColor, axisProps.tickThickness));
        }
        {
            const points = [];
            points.push(0, axisProps.ticksEvery * i, -fullTickLength);
            points.push(0, axisProps.ticksEvery * i, fullTickLength);
            axisTicks.push(createTickLine(points, axisProps.yColor, axisProps.tickThickness));
        }
    }
    return axisTicks;
}

function createZAxisTicks(axisProps = new AxisProperties()) {
    const axisTicks = [];

    // number of ticks along one axis from origin to tip
    const numTicks = Math.floor(axisProps.axisLength / axisProps.ticksEvery);
    if (numTicks < 1) {
        return axisTicks;
    }
    const fullTickLength = axisProps.axisThickness + axisProps.tickLength * 2;

    for (let i = -numTicks; i <= numTicks; i++) {
        if (i === 0) continue; // don't need a tick at the origin
        // criss-cross ticks
        {
            const points = [];
            points.push(-fullTickLength, 0, axisProps.ticksEvery * i);
            points.push(fullTickLength,  0, axisProps.ticksEvery * i);
            axisTicks.push(createTickLine(points, axisProps.zColor, axisProps.tickThickness));
        }
        {
            const points = [];
            points.push(0, -fullTickLength, axisProps.ticksEvery * i);
            points.push(0, fullTickLength,  axisProps.ticksEvery * i);
            axisTicks.push(createTickLine(points, axisProps.zColor, axisProps.tickThickness));
        }
    }
    return axisTicks;
}

function loadAxisLabelSprites(axisProps = new AxisProperties()) {
    log.debug(`Loading X sprite from ${x_sprite_path}`);
    const xTextureMap = new TextureLoader().load( x_sprite_path,
        (texture) => { log.debug("X sprite loaded"); }, null,
        (e) => { log.debug(`Error while loading X sprite`); console.error(e); } );
    const xSpriteMaterial = new SpriteMaterial( { map: xTextureMap, color: 0xffffff, transparent: true } );
    const xLabelSprite = new Sprite( xSpriteMaterial );
    xLabelSprite.scale.setScalar(2);
    xLabelSprite.position.set(axisProps.axisLength * 1.05, 0, 0);

    log.debug(`Loading Y sprite from ${y_sprite_path}`);
    const yTextureMap = new TextureLoader().load( y_sprite_path,
        (texture) => { log.debug("Y sprite loaded"); }, null,
        (e) => { log.debug(`Error while loading Y sprite`); console.error(e); } );
    const ySpriteMaterial = new SpriteMaterial( { map: yTextureMap, color: 0xffffff, transparent: true } );
    const yLabelSprite = new Sprite( ySpriteMaterial );
    yLabelSprite.scale.setScalar(2);
    yLabelSprite.position.set(0, axisProps.axisLength * 1.05, 0);

    log.debug(`Loading Z sprite from ${z_sprite_path}`);
    const zTextureMap = new TextureLoader().load( z_sprite_path,
        (texture) => { log.debug("Z sprite loaded"); }, null,
        (e) => { log.debug(`Error while loading Z sprite`); console.error(e); } );
    const zSpriteMaterial = new SpriteMaterial( { map: zTextureMap, color: 0xffffff, transparent: true } );
    const zLabelSprite = new Sprite( zSpriteMaterial );
    zLabelSprite.scale.setScalar(2);
    zLabelSprite.position.set(0, 0, axisProps.axisLength * 1.05);

    return [xLabelSprite, yLabelSprite, zLabelSprite];
}

export function createAxes(axisProps = new AxisProperties()) {
    const axisObjects = [];
    axisObjects.push(createXAxisLine(axisProps));
    axisObjects.push(createYAxisLine(axisProps));
    axisObjects.push(createZAxisLine(axisProps));
    if (axisProps.ticksEvery > 0) {
        axisObjects.push(...createXAxisTicks(axisProps));
        axisObjects.push(...createYAxisTicks(axisProps));
        axisObjects.push(...createZAxisTicks(axisProps));
    }
    axisObjects.push(...loadAxisLabelSprites(axisProps));
    return axisObjects;
}