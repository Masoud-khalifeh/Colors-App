import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import convert from 'color-convert';

import './Palette.css';

export default function Pallete(props) {
    const [Colors, SetColors] = useState(props.colors);
    const [SelectedColor, setSelectedColor] = useState("");
    const [TypeColor, setTypeColor] = useState("HEX");
    const [level, setLevel] = useState("600");
    const colorBox = Colors.map(color => <ColorBox key={uuid()} backGround={color.color} name={color.name} type={TypeColor} level={level} getColor={getColorName} />);

    function handleChangeSelect(e) {
        setTypeColor(e.target.value);
    };
    function handleChangeSlider(e) {
        setLevel(e.target.value);
    }

    function getColorName(color) {
        setSelectedColor(color);
        console.log(color)
    }

    function changeLevel(color, level) {
        const orginalColor = convert.hex.rgb(color);
        return `rgba(${orginalColor[0]},${orginalColor[1]},${orginalColor[2]},${level / 1000})`
    }

    return (
        <div className="Palette">
            <NavBar select={handleChangeSelect} slider={handleChangeSlider} type={TypeColor} level={level} color={SelectedColor} />
            {/* navbar goes here */}
            <div className="PaletteColors">
                {/*bunch of color boxes*/}
                {colorBox}
            </div>
            <div className="Footer"></div>
            {/* footer goes here             */}
        </div>
    )
}



