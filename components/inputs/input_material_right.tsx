import { RELATIVE_PERMITTIVITIES } from "../../misc/constants"
import { useGlobalStateStore } from "../../misc/global_state_store"


export default function InputMaterialRight() {

    const { material_right, setMaterialRight } = useGlobalStateStore()
    
    return <label className="form-control w-full h-full">
    <div className="label">
      <span className="label-text">relativen Permittivität Material Rechts</span>
    </div>
    <select className="select select-bordered w-full max-w-xs"
            value={material_right.material}
            onChange={(event) => {
                const selectedMaterial = RELATIVE_PERMITTIVITIES.find((val) => val.material == event.currentTarget.value);
                if (selectedMaterial) {
                  setMaterialRight(selectedMaterial);
                }
            }}>
      {RELATIVE_PERMITTIVITIES.map((val) => {
        return <option key={val.material} value={val.material}>{val.material} ({val.value})</option>
      })}
    </select>
  </label>
}