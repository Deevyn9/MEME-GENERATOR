import React from "react";
import Troll from "./images/troll-face.png";

export default function Header() {
    return (
        <div>
            <header>
                <div className="troll">
                    <img src={Troll} alt="" />
                    <h2>Meme Generator</h2>
                </div>
                <h3>React Course - Project 3</h3>
            </header>
        </div>
    )
}