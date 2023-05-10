import React from "react";
import './ColorBox.css';


export default function ColorBox(props) {
    const { backGround, name } = props;
    return (
        <div style={{ backgroundColor: `${backGround}` }} className="ColorBox" >
            <div className="ColorTop"></div>
            <div className="ColorCenter">
                <button>COPY</button>
            </div>
            <div className="ColorBottom">
                <span>{name}</span>
                <span className="MoreBtn">MORE</span>
            </div>


        </div>
    )
}