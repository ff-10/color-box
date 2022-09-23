import { useState } from "react";
import boxStyle from "./boxStyle.module.css";

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function Box() {

    const [color, setColor] = useState(getRandomColor());
    
    return (
        <div className={boxStyle.box} style={{ backgroundColor: color }} onClick={() => setColor(getRandomColor())}></div>
    )
}

export default Box;