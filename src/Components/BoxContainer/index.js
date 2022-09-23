import { useState } from "react";
import Box from "../Box";
import boxContainerStyle from "./boxContainerStyle.module.css";

function getBoxCount() {
    const boxesCount = [];

    for (let i = 0; i < 26; i++) {
        boxesCount.push(i);
    }

    return boxesCount;
}

function BoxContainer() {
    return (
        <div className={boxContainerStyle.container}>
            {getBoxCount().map(item => <Box key={`box-id-${item}`} />)}
        </div>
    )
}

export default BoxContainer;