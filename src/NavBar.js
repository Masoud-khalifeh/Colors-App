import React, { useState } from "react";
import { FormControl, Slider,InputLabel, Select, MenuItem } from '@mui/material';
import './NavBar.css';

export default function NavBar(props) {
    function selectClicker (e){
        props.select(e);

    };
    function sliderClicker (e){
        props.slider(e);

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
                        sx={{ width:"50%" }}
                        onChange={sliderClicker}
                    />
                </div>
                <div className="Select">
                    <FormControl className="FormControlSelect" variant="filled" sx={{ height:"3rem" }}>
                        <Select
                            labelId="type-select-label"
                            id="type-select"
                            value={props.type}
                            onChange={selectClicker}
                        >
                            <MenuItem value="HEX">{props.type=='HEX'?`HEX ${props.color}`:"HEX"}</MenuItem>
                            <MenuItem value="RGB">{props.type=='RGB'?`RGB ${props.color}`:"RGB"}</MenuItem>
                            <MenuItem value="RGBA">{props.type=='RGBA'?`RGBA ${props.color}`:"RGBA"}</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}