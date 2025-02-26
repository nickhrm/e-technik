import { Material, PERMITTIVITY_VACUUM } from "./constants";


export default class Calculator {

    static getEField(height: number, voltage: number): number {
        const result_not_rounded = voltage/height; 
        return Math.round((result_not_rounded + Number.EPSILON) * 1000) / 1000
    }

    static getDField(height: number, voltage: number, material: Material): number {
        const result_not_rounded = this.getEField(height, voltage) * material.value * PERMITTIVITY_VACUUM;
        return result_not_rounded;
    }

    static getDFieldProportional(height: number, voltage: number, material: Material): number {
        const result_not_rounded = this.getEField(height, voltage) * material.value;
        return result_not_rounded;
    }
}