import React from "react";
import './PalettesPage.css';
import {v4 as uuid } from 'uuid';



export default function PalettesPage(props) {

    //check if we do not have 20 colors in palette, we add white colors until 20
    function renderColors(palette) {
        const colors = [];
        for (let i = 0; i < 20; i++) {
          const color = palette[i] ? palette[i].color : "white";
          colors.push(<div key={uuid()} className="mainPaletteTopColor" style={{ backgroundColor: color }} />);
        }
        return colors;
      }
      
    return (



        <div className="PalettesPage">
            <div className="PalettesPageTop">
                <span>
                    React Colors
                </span>
                <span>
                    Create Palette
                </span>
            </div>
            <div className="PalettesPageBottom">
                {props.PaletteArrays.map(palette => (
                    <div key={uuid()} className="mainPalette">
                        <div className="mainPaletteTop">
                            {renderColors(palette.colors)}
                        </div>
                        <div className="mainPaletteBottom">
                            <span>{palette.paletteName}</span>
                            <span>{palette.emoji}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
} 