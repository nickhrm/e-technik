import { create } from "zustand";
import { Material, RELATIVE_PERMITTIVITIES } from "./constants";

interface GlobalState {
    height: number;
    voltage: number;
    material_left: Material;
    material_right: Material;
    show_e_field: boolean;
    show_d_field: boolean;



    setHeight: (height: number) => void;
    setVoltage: (voltage: number) => void;
    setMaterialLeft: (material: Material) => void;
    setMaterialRight: (material: Material) => void;
    setShowEField: (show: boolean) => void;
    setShowDField: (show: boolean) => void;
    
}   



export const useGlobalStateStore = create<GlobalState>((set) => ({
    height: 500,
    voltage: 0,
    material_left: RELATIVE_PERMITTIVITIES[0],
    material_right: RELATIVE_PERMITTIVITIES[0],
    show_e_field: true,
    show_d_field: true,

    setHeight: (height: number) => set({ height }),
    setVoltage: (voltage: number) => set({ voltage }),
    setMaterialLeft: (material: Material) => set({ material_left: material }),
    setMaterialRight: (material: Material) => set({ material_right: material }),
    setShowEField: (show: boolean) => set({ show_e_field: show }),
    setShowDField: (show: boolean) => set({ show_d_field: show }),

}));