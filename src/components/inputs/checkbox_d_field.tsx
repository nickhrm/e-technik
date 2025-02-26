import { useGlobalStateStore } from "../../misc/global_state_store"



export default function CheckboxDField() {
    
    const { show_d_field, setShowDField } = useGlobalStateStore()
    
    
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">D-Feld anzeigen</span>
                <div className="w-1"></div>
                <input type="checkbox" className="checkbox"  checked={show_d_field} onChange={(e) => setShowDField(e.target.checked)}/>
            </label>
        </div>
    )
}

