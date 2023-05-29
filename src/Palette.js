import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import convert from 'color-convert';
import chroma from "chroma-js";
import './Palette.css';

export default function Pallete(props) {
    const ColorsArray = props.colors;
    const [Open,setOpen]=useState(false);
    const [Colors, SetColors] = useState(ColorsArray);
    const [SelectedColor, setSelectedColor] = useState("");
    const [TypeColor, setTypeColor] = useState("HEX");
    const [Level, setLevel] = useState("600");
    
    const colorBox = Colors.map(color => <ColorBox key={uuid()} backGround={convertColor(color.color,TypeColor,Level)} name={color.name} selected={updateSelectedColor} />);

    function updateColor() {
        const newColors = ColorsArray.map(color => {
            const scale = chroma.scale([chroma(color.color).darken(0.1).hex(), chroma(color.color).darken(1.5).hex()]);
            const finalColor = scale(Level / 1000).hex();
            return { ...color, color: finalColor };
        });
        SetColors(newColors);
    }

    function updateSelectedColor(color) {
        setSelectedColor(color)
    }

    function handleChangeSelect(e) {
        setTypeColor(e.target.value);
        setSelectedColor("");
        setOpen(true);
        setTimeout(()=>{
            setOpen(false)
        },3000)
    };
    function handleChangeSlider(e) {
        setLevel(e.target.value);
        setSelectedColor("");
    }



    function convertColor(hex, exitType, level) {
        if (hex !== "") {
            const color = convert.hex.rgb(hex);
            if (exitType === "RGB") {
                return `rgb(${color[0]},${color[1]},${color[2]})`
            } else if (exitType === "RGBA") {
                return `rgba(${color[0]},${color[1]},${color[2]},1)`
            } else {
                return hex
            }
        }else{
            return ""
        }


    }
    return (
        <div className="Palette">
            <NavBar select={handleChangeSelect} slider={handleChangeSlider} type={TypeColor} level={Level} color={SelectedColor} update={updateColor} />
            {/* navbar goes here */}
            <div className="PaletteColors">
                {/*bunch of color boxes*/}
                {colorBox}
            </div>
            <div className="Footer">
            <span>{props.paletteName}</span>
            <span>{props.emoji}</span>
            </div>
            {/* footer goes here             */}

            <Snackbar
                open={Open}
                autoHideDuration={6000}
                message={`Function Changed to ${TypeColor}`}
            />
        </div>
    )
}



