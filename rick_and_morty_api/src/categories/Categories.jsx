import React from "react";
import { Episodes } from '../episodios/Episodes'
import { Locations } from '../ubicaciones/Locations'
import { Characters } from '../personajes/Characters'
import { useState, useEffect } from 'react'
import './categories.css'

export const Categories = () => {

    const [seccion, setSeccion] = useState("characters")


return (
    <div>
        <h1 className="TittleH1">Bienvenido a mi API de Rick y Morty</h1>
        <div>
            <ul className="listaUl">
                <li><button onClick={() => { setSeccion("characters") }}>Personajes</button></li>
                <li><button onClick={() => { setSeccion("locations") }}>ubicaciones</button></li>
                <li><button onClick={() => { setSeccion("episodes") }}>Episodios</button></li>
            </ul>
        </div>

        <div>
            {seccion == "characters" && <Characters />}
            {seccion == "locations" && <Locations />}
            {seccion == "episodes" && <Episodes />}
        </div>
    </div>
)
}
