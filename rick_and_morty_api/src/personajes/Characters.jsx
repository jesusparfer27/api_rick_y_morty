import React from "react";
import { useState, useEffect } from 'react'
import Paginacion from '../paginacion/Paginacion.jsx'
import './characters.css'

export const Characters = () => {

    const [personajes, setPersonajes] = useState([])

    const [productsPerPage, setProductsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    });

    const totalItems = personajes.length
    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    useEffect(() => {
        getPersonajes()
        console.log("[Personajes.jsx] cargando datos")
    }, [])

    const getPersonajes = async () => {
        try {
            // mi codigo
            const url = "https://rickandmortyapi.com/api/character"
            const data = await respuesta.json()
            setPersonajes(data.results)
            setInfo(data.info)
            console.log(data)
            // console.log("[Personajes.jsx, Respuesta vale:", respuesta )
        } catch (e) {
            console.error("Tuvimos un error", e)
        }
    }


    return (
        <div className="flexWrap">
                {
                    personajes.slice(firstIndex, lastIndex).map((result) => {
                        return (
                            <div className="charactersContainer">
                                <div className="charactersCard" key={result.id}>
                                    <img src={result.image} alt={result.name} />
                                    <h2>nombre: {result.name}</h2>
                                </div>
                            </div>
                        )

                    })
                }
                <div>
                <Paginacion
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={totalItems} />
                </div>
        </div>
    );
}