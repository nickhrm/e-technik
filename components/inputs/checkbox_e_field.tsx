import { useGlobalStateStore } from "../../misc/global_state_store"

export default function CheckboxEField() {
    
    const { show_e_field, setShowEField } = useGlobalStateStore()
    
    
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">E-Feld anzeigen</span>
                <div className="w-1"></div>
                <input type="checkbox" className="checkbox"  checked={show_e_field} onChange={(e) => setShowEField(e.target.checked)}/>
            </label>
        </div>
    )
}

