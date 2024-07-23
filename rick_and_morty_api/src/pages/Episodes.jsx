import { useState, useEffect } from 'react'
import '../css/episodes.css'

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
        getEpisodios('https://rickandmortyapi.com/api/episode')
    }, [])

    const getEpisodios = async (url) => {
        const respuesta = await fetch(url)
        const objeto = await respuesta.json()

        // a veces devuelve error en lugar de results
        if (objeto.error) {
            setErrorData("No hay resultados");
            setEpisodios([])
            setInfo({})
            return;
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
        if (string.trim().length > 3) {
            getEpisodios(`https://rickandmortyapi.com/api/episode/?name=${string.trim()}`)
        }
    }

    return (
        <section>
            <h1 className='H1Tittle'>Episodios</h1>

            <div className="flexBetween">
                <div className="itemsStart1">
                    <input type="text"
                        onChange={handleFilterByName}
                        value={filter}
                        placeholder='Buscar Episodios (4 chars)'
                        style={{ width: "400px" }
                        } />
                    {filter} ({info.count})

                    <button className='x' style={{ background: "red", color: "white", padding: "1px", width: "30px", height: "30px", fontSize: "small" }} onClick={
                        () => {
                            setFilter("");
                            getEpisodios("https://rickandmortyapi.com/api/episode")
                        }
                    }>X</button>
                </div>
                <div className='itemsStart2'>
                    <button disabled={!info.prev} onClick={() => { setEpisodios(info.prev) }}>Ant</button>
                    <button disabled={!info.next} onClick={() => { getEpisodios(info.next) }}>Sig</button>
                </div>
            </div>



            <div className="flexGridEpisodes">
                {errorData && <div>{errorData}</div>}
                {
                    episodios.map((episode, index) => <EpisodeCard key={episode.id} {...episode} index={index} />
                    )
                }
            </div>
            <div className="flexBetween">
                <button disabled={!info.prev} onClick={() => { setEpisodios(info.prev) }}>Ant</button>
                <button disabled={!info.next} onClick={() => { getEpisodios(info.next) }}>Sig</button>
            </div>
        </section>
    );
}

const EpisodeCard = ({ name, air_date, episode }) => {

    // index no es id, viene del map para animar los elementos con un multiplicador

    // Possible status  values: "Alive", "Dead", "Unknown"
    // Set de color depending on status
    // const color = (status == "Alive") ? "#7cb342" 
    //                                   : (status == "Dead")  ? "red" 
    //                                                         : "orange";

    return (
        <article className='Card'>
            <h2 className="h2Style">{name}</h2>
            <div className="flexInfo">
                <h3 className='h3Style'>{air_date}</h3>
                <strong className='strongEpisode'>{episode}</strong>
            </div>
        </article>
    )

}
