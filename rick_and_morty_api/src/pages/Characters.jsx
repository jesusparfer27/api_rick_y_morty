import { useEffect, useState } from 'react';
import '../css/characters.css'

export const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [errorData, setErrorData] = useState("")
    const [filter, setFilter] = useState("")
    const [info, setInfo] = useState({
        count: 0,
        prev: null,
        next: null,
        page: 0
    })

    useEffect(() => {
        getCharacters("https://rickandmortyapi.com/api/character")
    }, [])

    const getCharacters = async (url) => {
        const respuesta = await fetch(url)
        const objeto = await respuesta.json()

        if (objeto.error) {
            setErrorData("No hay resultados");
            setCharacters([])
            setInfo({})
        } else {
            setErrorData("")
            setCharacters(objeto.results)
            setInfo(objeto.info)
        }
    }

    const handleFilterByName = (e) => {
        const string = e.target.value;
        setFilter(string)
        console.log(string)
        if (string.trim().length > 3) {
            getCharacters(`https://rickandmortyapi.com/api/character/?name=${string.trim()}`)
        }
    }


    return (
        <section>
            <div className="H1Tittle">Personajes</div>

            <div className="flexBetween">
                <div className="itemsStart1">
                    <input type="text"
                        onChange={handleFilterByName}
                        value={filter}
                        placeholder="Buscar Personajes (4 chars)"
                        style={{ width: "400px" }
                        } />
                    {filter} ({info.count})

                    <button className='x' style={{ background: "red", color: "white", padding: "1px", width: "30px", height: "30px", fontSize: "small" }} onClick={
                        () => {
                            setFilter("");
                            getCharacters("https://rickandmortyapi.com/api/character")
                        }
                    }>X</button>
                </div>
                <div className="itemsStart2">
                    <button disabled={!info.prev} onClick={() => { setCharacters(info.prev) }}>Ant</button>
                    <button disabled={!info.next} onClick={() => { getCharacters(info.next) }}>Sig</button>
                </div>
            </div>

            <div className="flexGridCharacters">
                {errorData && <div>{errorData}</div>}
                {
                    characters.map((character, index) => <CharacterCard key={character.id} {...character} index={index} />
                    )
                }
            </div>
            <div className="flexBetween">
                <button disabled={!info.prev} onClick={() => { setCharacters(info.prev) }}>Ant</button>
                <button disabled={!info.next} onClick={() => { getCharacters(info.next) }}>Sig</button>
            </div>
        </section>
    );
}

const CharacterCard = ({image, name, status, species}) => {
    return (
        <article className="Card">
            <img src={image} alt={name} />
            <h2 className="h2Style">{name}</h2>
            <strong className="strongStyle">{status}</strong>
            <strong className="strongStyle">{species}</strong>
            <p>{origin.name}</p>
        </article>
    )
}