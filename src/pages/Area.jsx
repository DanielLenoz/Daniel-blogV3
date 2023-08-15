import React from "react";
import { useParams } from "react-router-dom";

function Area() {
    const { id } = useParams();
    
    console.log(id);
    return <p>Area {id}</p>;
}

export { Area };
