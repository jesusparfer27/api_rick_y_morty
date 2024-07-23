import { useState, useEffect } from 'react'

export const Episodes = () => {

    const [episodios, setEpisodios] = useState([])
    const [filter, setFilter] = useState("")
    const [errorData, setErrorData] = useState("")
    const [info, setInfo] = useState({
        page: 0,
        prev: null,
        next: null,
        count: 0
    })

    useEffect(() => {
        setEpisodios('https://rickandmortyapi.com/api/episode')
    }, [])

    const getEpisodios = async (url) => {
        const respuesta = await fetch(url)
        const objeto = await respuesta.json()

        // a veces devuelve error en lugar de results
        if(objeto.error) {
            setErrorData("No hay resultados");
            setEpisodios([])
            setInfo({})
        } else {
            setErrorData("")
            setEpisodios(objeto.results)
            setInfo(objeto.info)
        }
        
    }

    const handleFilterByName = (e) => {
        const string = e.target.value;
        setFilter(string);
        console.log(string)
        if(string.trim().length > 3) {
            getEpisodios(`https://rickandmortyapi.com/api/episode/?name=${string.trim()}`)
        }
    }

    return (
        <section>
            <h3>Episodios</h3>
        </section>
    );
}
