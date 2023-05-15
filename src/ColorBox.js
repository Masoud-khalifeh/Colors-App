import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import convert from 'color-convert';
import chroma from "chroma-js";
import './ColorBox.css';



export default function ColorBox(props) {
    const { backGround, name, type, level,getColor } = props;
    const [Copied, setCopied] = useState(false);
    const scale = chroma.scale([chroma(backGround).darken(0.1).hex(), chroma(backGround).darken(1.5).hex()]);
    const finalColor= scale(level/1000).hex();
 



    // this function converts hex colors to other formats
    function convertColor(hex, exitType, level) {
        const color = convert.hex.rgb(hex);
        if (exitType == "RGB") {
            return `rgb(${color[0]},${color[1]},${color[2]})`
        } else if (exitType == "RGBA") {
            return `rgba(${color[0]},${color[1]},${color[2]},${level / 1000})`
        } else {
            return hex
        }

    }

    function copyHandler() {
        setCopied(true);
        getColor(convertColor(finalColor, type, level));
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }
    const layOut = () => {
        return (
            <div>
                <div style={{ backgroundColor: `${finalColor}` }} className={`IsCopied ${Copied && "Copied"}`}></div>
                <div className={`IsCopiedText ${Copied && "CopiedText"}`}><h1>COPIED!</h1><p> {convertColor(backGround, type, level)}</p></div>
            </div>
        )
    }
    return (

        <CopyToClipboard text={convertColor(backGround, type, level)} onCopy={copyHandler}>
            <div style={{ backgroundColor: ` ${finalColor}` }} className={`ColorBox`}  >
                <div className="ColorTop"></div>
                <div className="ColorCenter">
                    {Copied && layOut()}
                    <button>Copy</button >
                </div>
                <div className="ColorBottom">
                    <span>{name}</span>
                    <span className="MoreBtn">MORE</span>
                </div>
            </div>

        </CopyToClipboard >





    )
}