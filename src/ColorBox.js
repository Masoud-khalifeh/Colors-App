import React from "react";
import './ColorBox.css';


export default function ColorBox(props) {
    return (
        <div style={{ backgroundColor: `${props.backGround}`}} className="ColorBox" >
            <span>{props.name}</span>
            <span>more</span>
        </div>
    )
}