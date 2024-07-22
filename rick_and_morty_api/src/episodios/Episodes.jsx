import React from "react";
import { useState, useEffect } from 'react'

export const Episodes = () => {

    const [data, setData] = useState([])
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const respuesta = await fetch("https://rickandmortyapi.com/api/episode")
            const objJs = await respuesta.json()
            setData(objJs)
        
    } catch (e) {
        console.error("Hay un error obteniendo datos")
        }
    }

    return (
        <div className="divContainer">
            {
                data.map(({ id, name, air_date, episode, characters, url, created }) => {

                    return (
                        <div key={id} className="divCard">
                            <h2 className="h2Style">{name}</h2>
                            <h3 className="h3Style">{air_date}</h3>
                            <h3 className="h3Style">{episode}</h3>
                            <h3 className="h3Style">{characters}</h3>
                            <p className="pStyle">{url}</p>
                            <p className="pStyle">{created}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}
