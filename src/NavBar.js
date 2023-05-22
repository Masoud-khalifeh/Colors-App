import React from "react";
import { FormControl, Slider, Select, MenuItem } from '@mui/material';
import './NavBar.css';

export default function NavBar(props) {
    function selectClicker(e) {
        props.select(e);
        props.update()

    };
    function sliderClicker(e) {
        props.slider(e);
        props.update()

    }



    return (
        <div className="NavBar">
            <div className="NavBarLeft">ReactColorPicker</div>
            <div className="NavBarRight">
                <div className="Slider">
                    <span>LEVEL : {props.level}</span>
                    <Slider
                        className="mainSlider"
                        size="small"
                        aria-label="level"
                        defaultValue={600}
                        // getAriaValueText={props.transparancy}
                        step={100}
                        marks
                        min={100}
                        max={900}
                        sx={{ width: "50%" }}
                        onChange={sliderClicker}
                    />
                </div>
                <div className="Select">
                    <FormControl  variant="filled" sx={{ width: "30%"}}>
                        <Select 
                            labelId="type-select-label"
                            id="type-select"
                            value={props.type}
                            onChange={selectClicker}
                        >
                            <MenuItem value="HEX">{props.type === 'HEX' && props.type !== "" ? `HEX ${props.color}` : "HEX"}</MenuItem>
                            <MenuItem value="RGB">{props.type === 'RGB' && props.type !== "" ? `RGB ${props.color}` : "RGB"}</MenuItem>
                            <MenuItem value="RGBA">{props.type === 'RGBA' && props.type !== "" ? `RGBA ${props.color}` : "RGBA"}</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}