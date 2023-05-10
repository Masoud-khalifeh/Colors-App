
import React from "react";
import ColorBox from './ColorBox';
import './Palette.css';

export default function Pallete(props) {
    const colorBox = props.colors.map(color => <ColorBox backGround={color.color} name={color.name} />)
    return (
        <div className="Palette">
            {/* navbar goes here */}
            <div className="PaletteColors">
                {/*bunch of color boxes*/}
                {colorBox}
            </div>
            {/* footer goes here             */}
        </div>
    )
}



