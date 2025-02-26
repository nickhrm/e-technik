import Calculator from "../misc/calculator";
import { Material } from "../misc/constants"
import { useGlobalStateStore } from "../misc/global_state_store"
import { FieldArrow } from "./fieldArrow";



interface DielectricaProps {
    material: Material;
}


export default function Dielectrica(props: DielectricaProps) {


    const { height, voltage, show_d_field, show_e_field } = useGlobalStateStore()

    const eField = Calculator.getEField(height, voltage);

    const dField = Calculator.getDFieldProportional(height, voltage, props.material);

    const eFieldCount = eField * 1000;
    const dFieldcount = Math.round(dField * 1000);

    console.log(eFieldCount, dFieldcount);

    return (
        <div className="w-full h-full relative" style={{ backgroundColor: props.material.color }}>
            <div className="absolute inset-0 z-0 flex flex-row justify-around items-center overflow-hidden">
                {dFieldcount > 0 && show_d_field &&
                    [...Array(dFieldcount)].map((_, i) => (
                        <FieldArrow key={`d-${i}`} color="blue" />
                    ))}
            </div>
            <div className="absolute inset-0 z-0 flex flex-row justify-around items-center overflow-hidden">
                {eFieldCount > 0 && show_e_field &&
                    [...Array(eFieldCount)].map((_, i) => (
                        <FieldArrow key={`e-${i}`} color="red" />
                    ))}
            </div>


        </div>
    );

}




