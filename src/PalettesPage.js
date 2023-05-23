import React from "react";
import './PalettesPage.css';



export default function PalettesPage(props) {
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
                    <div className="mainPalette">
                        <div className="mainPaletteTop">
                            {palette.colors.map(color => (
                                <div className="mainPaletteTopColor" style={{ backgroundColor: `${color.color}` }}></div>
                            ))}
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