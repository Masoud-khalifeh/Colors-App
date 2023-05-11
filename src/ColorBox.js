import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';



export default function ColorBox(props) {
    const { backGround, name } = props;
    const style = { fontSize: '3em', transform: "scale(20)", zIndex: 9999, position: "fixed", }
    const [Copied, setCopied] = useState(false);
    function copyHandler() {
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }
    const layOut = () => {
        return (
            <div>
                <div style={{ backgroundColor: `${backGround}` }} className={`IsCopied ${Copied && "Copied"}`}></div>
                <div className={`IsCopiedText ${Copied && "CopiedText"}`}><h1>COPIED!</h1><p>{backGround}</p></div>
            </div>
        )
    }
    return (

        <CopyToClipboard text={backGround} onCopy={copyHandler}>
            <div style={{ backgroundColor: `${backGround}` }} className={`ColorBox`}  >
                <div className="ColorTop"></div>
                <div className="ColorCenter">
                    {Copied&&layOut()}
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