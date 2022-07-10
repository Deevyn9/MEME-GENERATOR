import React from "react";
import memesData from "./memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }) 

    const [allMemesImages, setAllMemesImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return(
        <div>
            <div className="main">
                <div className="input">
                    <input 
                    type="text" 
                    placeholder="Top Text" 
                    name="topText"
                    value={meme.topText} 
                    onChange={handleChange}
                    />
                    <input 
                    type="text" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={getMemeImage}>Get a new meme image 🖼️</button>
                <div className="meme">
                <img className="memeImage" src={meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}