
interface ArrowProps {
    color?: string; // Die Prop ist optional

}


export function FieldArrow(props: ArrowProps) {
    return (
        <div className="flex flex-col justify-center items-center h-full opacity-60" >

            <div className="w-[2px] h-full" style={{ backgroundColor: props.color }}></div>
            <div
                className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[10px] border-l-transparent border-r-transparent" style={{ borderTopColor: props.color }}>
            </div>
         </div>
    )
} 