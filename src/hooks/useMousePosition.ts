import { useState, useEffect } from "react";

function useMousePosition(){
    let [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    })


    useEffect(() => {
        window.addEventListener("mousemove",(event:MouseEvent) => setMousePosition(event));
        return ()=> {
            window.removeEventListener("mousemove",(event:MouseEvent) => setMousePosition(event));
        }
    })
    return mousePosition;
}

export default useMousePosition;