import React from "react";
import { useState, useEffect } from React

export const Categories = () => {

    const [link, setLink] = useState([])

    useEffect(() => {

        const button = document.getElementByClassName("buttonStyleCategories")
        button.addEventListener("click", setLink)

    }, [])

    const fetchingData = async () => {
        try {
            const answer = await fetch(`{https://rickandmortyapi.com/api/${link}`)
            const gettingData = await answer.json()
        } catch (e) {
            console.error("No encuentro la dirección")
        }
    }

    const goToLink = () => {
        setLink = () => {

        } 
    }

    return (
        <div className="divStyle">
            <button onClick={goToLink} className="buttonStyleCategories">
                Characters
                <a href={link}></a>
            </button>

            <button onClick={goToLink} className="buttonStyleCategories">
                Episodes
                <a href={link}></a>
            </button>

            <button onClick={goToLink} className="buttonStyleCategories">
                Locations
                <a href={link}></a>
            </button>
        </div>
    );
}
