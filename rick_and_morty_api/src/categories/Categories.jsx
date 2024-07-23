import { Episodes } from '../episodios/Episodes'
import { Locations } from '../ubicaciones/Locations'
import { Characters } from '../personajes/Characters'
import { useState, useEffect } from 'react'
import './categories.css'

export const Categories = () => {

    const [seccion, setSeccion] = useState("characters")
    

return (
        <main>
            {seccion == "characters" && <Characters />}
            {seccion == "locations" && <Locations />}
            {seccion == "episodes" && <Episodes />}
        </main>
)
}
