import DMP from "./DMP";
import * as loglevel from "loglevel";
import {Vector3} from "three";

const log = loglevel.getLogger("lorenz");
log.setLevel('debug');

/**
 * @type {{sigma: number, dt: number, rho: number, beta: number}}
 */
const defaultLorenzParams = {
    // lorenz used the values σ = 10, β = 8/3 and ρ = 28, so these are our defaults
    'sigma': 10,
    'beta': 8/3,
    'rho': 28,
    'dt': 0.01
};

class Lorenz extends DMP {
    /**
     * @type {{sigma: number, dt: number, rho: number, beta}}
     */
    lorenzParams = {
        ...defaultLorenzParams
    };

    /**
     * @override
     */
    resetFunctionParameters = () => {
        log.debug("Resetting Lorenz parameters to defaults");
        this.lorenzParams.sigma = defaultLorenzParams.sigma;
        this.lorenzParams.beta = defaultLorenzParams.beta;
        this.lorenzParams.rho = defaultLorenzParams.rho;
        this.lorenzParams.dt = defaultLorenzParams.dt;
    }

    /**
     * Advance the dynamic function.
     *
     * @override
     * @param pos The current position, as a `Vector3`
     * @returns {Vector3}  The new position
     */
    advanceGraph(pos) {
        const x_dot = this.lorenzParams.sigma * (pos.y - pos.x);
        const y_dot = pos.x * (this.lorenzParams.rho - pos.z) -  pos.y
        const z_dot = pos.x * pos.y - this.lorenzParams.beta * pos.z;

        // log.debug(`Lorenz gradient: (${x_dot}, ${y_dot}, ${z_dot})`);

        return new Vector3(
            pos.x + (x_dot * this.lorenzParams.dt),
            pos.y + (y_dot * this.lorenzParams.dt),
            pos.z + (z_dot * this.lorenzParams.dt)
        );
    }

    /**
     * Add controls for Lorenz parameters.
     *
     * @override
     * @param gui The gui object to which we are adding our specific folders
     * @return the new folder created
     */
    createFunctionParamsGuiFolder(gui) {
        const lorenzParamsFolder = gui.addFolder('Lorenz Parameters');
        lorenzParamsFolder.add(this.lorenzParams, 'sigma', 0.0001, 20, 0.1).name("&sigma;").listen();
        lorenzParamsFolder.add(this.lorenzParams, 'beta', 0.0001, 10, 0.001).name("&beta;").listen();
        lorenzParamsFolder.add(this.lorenzParams, 'rho', 0.0001, 100, 1).name("&rho;").listen();
        lorenzParamsFolder.add(this.lorenzParams, 'dt', 0.001, 0.03, 0.001).name("&delta;t").listen();
        return lorenzParamsFolder;
    }

    /**
     * Override this to display a custom link in the footer for the specific dynamic function
     * @returns {{text: string, url: string}}
     */
    getFooterText() {
        return {
            url: "https://en.wikipedia.org/wiki/Lorenz_system",
            text: "What is the Lorenz attractor?"
        }
    }

}

export default Lorenz;