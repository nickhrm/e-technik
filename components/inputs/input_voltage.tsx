import { useGlobalStateStore } from "../../misc/global_state_store"


export default function InputVoltage() {

    const { voltage, setVoltage } = useGlobalStateStore()

    return <label className="form-control w-full h-full">
        <div className="label">
            <span className="label-text">Spannung <b>U</b></span>
        </div>
        <div className="join">
            <p className="join-item bg-base-300 align-baseline p-3" >V</p>
            <input className="input w-48 input-bordered join-item"
                type="number" min={0}
                step={0.5}
                value={voltage} onChange={(event) => setVoltage(Number.parseFloat(event.currentTarget.value))}>
            </input>
        </div>
    </label>
}