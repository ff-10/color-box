import { useState } from "react";
import Box from "../Box";
import boxContainerStyle from "./boxContainerStyle.module.css";

function BoxContainer() {

    const [boxes, setBoxes] = useState([1, 2, 3]);

    return (
        boxes.map(item => <Box key={`box-id-${item}`}/>)
    )
}

export default BoxContainer;