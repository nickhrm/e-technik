import { useGlobalStateStore } from "../../misc/global_state_store"


export default function InputDistance() {

    const { height, setHeight } = useGlobalStateStore()

    return <label className="form-control w-full h-full">
        <div className="label">
            <span className="label-text">Plattenabstand <b>d</b></span>
        </div>
        <div className="join">
            <p className="join-item bg-base-300 align-baseline p-3" >mm</p>
            <input className="input w-48 input-bordered join-item"
                type="number"
                min={100} value={height}
                onChange={(event) => setHeight(Number.parseInt(event.currentTarget.value))} >
            </input>
        </div>
    </label>
}