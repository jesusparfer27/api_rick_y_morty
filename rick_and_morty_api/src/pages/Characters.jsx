import { useEffect, useState } from 'react';
import '../css/characters.css'

export const Characters = () => {

    const [charactersPerPage, setCharactersPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [characters, setCharacters] = useState([])
    const [errorData, setErrorData] = useState("")
    const [filter, setFilter] = useState("")
    const [buttonFilter, setButtonFilter] = useState("All")
    const [info, setInfo] = useState({
        count: 0,
        prev: null,
        next: null,
        page: 0
    })

    const lastIndex = currentPage * charactersPerPage
    const firstIndex = lastIndex - charactersPerPage

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

    const handleFilterByStatus = (status) => {
        setButtonFilter(status);
        if (status === "All") {
            getCharacters("https://rickandmortyapi.com/api/character")
        } else {
            getCharacters(`https://rickandmortyapi.com/api/character/?status=${status}`)
        }
    }

    const filteredCharacters = buttonFilter === "All" 
    ? characters 
    : characters.filter(character => character.status.toLowerCase() === buttonFilter.toLowerCase());



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
                <div className="panelControl-filtros">
                    <div className='filterByStatus'>
                        <button className={`${buttonFilter == "alive" ? "btnA" : ""}`} onClick={() => handleFilterByStatus("Alive")}>alive</button>
                        <button className={`${buttonFilter == "dead" ? "btnA" : ""}`} onClick={() => handleFilterByStatus("Dead")}>dead</button>
                        <button className={`${buttonFilter == "unknown" ? "btnA" : ""}`} onClick={() => handleFilterByStatus("Unknown")}>unknown</button>
                        <button className={`${buttonFilter == "all" ? "btnA" : ""}`} onClick={() => handleFilterByStatus("All")}>all</button>
                    </div>
                </div>
                <div className="itemsStart3">
                    <button className='buttonPage' disabled={!info.prev} onClick={() => { setCharacters(info.prev) }}>Ant</button>
                    <button className='buttonPage' disabled={!info.next} onClick={() => { getCharacters(info.next) }}>Sig</button>
                </div>
            </div>

            <div className="flexGridCharacters">
                {errorData && <div>{errorData}</div>}
                {
                    characters.slice(firstIndex, lastIndex).map((character, index) => <CharacterCard key={character.id} {...character} index={index} />
                    )
                }
            </div>
            <div className="flexBetween">
                <button className='buttonPage' disabled={!info.prev} onClick={() => { setCharacters(info.prev) }}>Ant</button>
                <button className='buttonPage' disabled={!info.next} onClick={() => { getCharacters(info.next) }}>Sig</button>
            </div>
        </section>
    );
}

const CharacterCard = ({ image, name, status, species }) => {
    return (
        <article className="Card">
            <h2 className="h2Style">{name}</h2>
            <img className='imageCard' style={{ display: "flex", justifyContent: "center" }} src={image} alt={name} />

            <div className="characterData">
                {
                    status === "Alive" && (
                        <span className='alive'>STATUS: {status}</span>
                    )
                }
                {
                    status === "Dead" && (
                        <span className='dead'>STATUS: {status}</span>
                    )
                }
                {
                    status === "unknown" && (
                        <span className='other'>STATUS: {status}</span>
                    )
                }
                <h3>{species}</h3>
                <p>{origin.name}</p>
            </div>
        </article>
    )
}