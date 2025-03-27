import Dielectrica from "./components/dielectrica"
import InputDistance from "./components/inputs/input_distance"
import InputMaterialLeft from "./components/inputs/input_material_left"
import InputMaterialRight from "./components/inputs/input_material_right"
import InputVoltage from "./components/inputs/input_voltage"
import Calculator from "./misc/calculator"
import { useGlobalStateStore } from "./misc/global_state_store"
import DistanceArrow from "./components/distanceArrow"
import CheckboxDField from "./components/inputs/checkbox_d_field"
import CheckboxEField from "./components/inputs/checkbox_e_field"


function App() {

  const { height, voltage, material_left, material_right } = useGlobalStateStore()

  return (
    <div className="flex flex-col justify-center items-center">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-10 auto-rows-fr">
        <InputDistance />
        <InputVoltage />
        <InputMaterialLeft />
        <InputMaterialRight />
      </div>
      <div className="flex flex-row space-x-4">
        <CheckboxDField />
        <CheckboxEField />
      </div>
      <div className="h-8"></div>
      <div className="flex flex-row space-x-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">E-Feld in V/mm</div>
            <div className="stat-value">{Calculator.getEField(height, voltage)}</div>
            <div className="stat-desc">Formel: E=U/d</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">D-Feld links in V/mm</div>
            <div className="stat-value">{Calculator.getDField(height, voltage, material_left).toPrecision(3)}</div>
            <div className="stat-desc">Formel: D=ε0*εr*E</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">D-Feld rechts in V/mm</div>
            <div className="stat-value">{Calculator.getDField(height, voltage, material_right).toPrecision(3)}</div>
            <div className="stat-desc">Formel: D=ε0*εr*E</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">D-Feld links(Proportional) in V/mm</div>
            <div className="stat-value">{Calculator.getDFieldProportional(height, voltage, material_left).toPrecision(3)}</div>
            <div className="stat-desc">Formel: D=εr*E</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">D-Feld rechts(Proportional) in V/mm</div>
            <div className="stat-value">{Calculator.getDFieldProportional(height, voltage, material_right).toPrecision(3)}</div>
            <div className="stat-desc">Formel: D=εr*E</div>
          </div>
        </div>
      </div>

      <div className="w-full  p-10 flex flex-row" style={{ height: height + 'px' }}>

        <div className="w-full h-full">
          <p className="text-end">U={voltage}V</p>
          <div className="flex flex-row w-full h-full">
            <div className="h-full flex flex-col justify-center items-center">
              <p>d={height}mm</p>
            </div>
            <div className="w-3"></div>

            <DistanceArrow></DistanceArrow>

            <div className="w-7"></div>

            <div className="border-t-2 border-b-2 border-black flex flex-row h-full w-full">
              <Dielectrica material={material_left} ></Dielectrica>
              <Dielectrica material={material_right}></Dielectrica>
            </div>
          </div>
          <p className="text-end">U=0V</p>

        </div>

      </div>

    </div>
  )
}

export default App
