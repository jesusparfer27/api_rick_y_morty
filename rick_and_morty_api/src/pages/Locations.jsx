import { useState, useEffect } from 'react'
import '../css/locations.css'

export const Locations = () => {

    const [locationsPerPage, setLocationsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState("")
    const [locations, setLocations] = useState([])
    const [errorData, setErrorData] = useState("")
    const [info, setInfo] = useState({
        count: 0,
        prev: null,
        next: null,
        page: 0
    })

    const lastIndex = currentPage * locationsPerPage
    const firstIndex = lastIndex - locationsPerPage

    useEffect(() => {
        getLocations('https://rickandmortyapi.com/api/location')
    }, [])

    const getLocations = async (url) => {
        const respuesta = await fetch(url)
        const objeto = await respuesta.json()


        if (objeto.error) {
            setErrorData("No hay resultados")
            setLocations([])
            setInfo({})
            return;
        } else {
            setErrorData("")
            setInfo(objeto.info)
            setLocations(objeto.results)
        }
    }

    const handleFilterByName = (e) => {
        const string = e.target.value;
        setFilter(string);
        console.log(string)
        if (string.trim().length > 3) {
            getLocations(`https://rickandmortyapi.com/api/locations/?name=${string.trim()}`)
        }
    }


    return (
        <section>
            <h1 className="H1Style">Ubicaciones</h1>
            <div className="flexBetween">
                <div className="itemsStart1">
                    <input type="text"
                        onChange={handleFilterByName}
                        value={filter}
                        placeholder="Buscar Epidosdios (4 chars)"
                        style={{ width: "400px" }
                        } />
                    {filter} ({info.count})

                    <button className="x" style={{ background: "red", color: "white", padding: "1px", width: "30px", height: "30px", fontSize: "small" }} onClick={
                        () => {
                            setFilter("")
                            getLocations("https://rickandmortyapi.com/api/locations")
                        }
                    }>X</button>
                </div>
                <div className="itemsStart2">
                    
                </div>
                <div className="itemsStart3">
                    <button className='buttonPage' disabled={!info.prev} onClick={() => setLocations(info.prev)}>Ant</button>
                    <button className='buttonPage' disabled={!info.next} onClick={() => setLocations(info.next)}>Sig</button>
                </div>
            </div>

            <div className="flexGridLocations">
                {errorData && <div>{errorData} </div>}
                {
                    locations.slice(firstIndex, lastIndex).map((location, index) => <LocationsCard key={location.id} {...location} index={index} />
                    )
                }
            </div>
            <div className="flexBetween">
                    <button className='buttonPage' disabled={!info.prev} onClick={() => setLocations(info.prev)}>Ant</button>
                    <button className='buttonPage' disabled={!info.next} onClick={() => setLocations(info.next)}>Sig</button>
                </div>
        </section>
    );
}

const LocationsCard = ({ name, type, dimension }) => {
    return (
        <article className="Card">
            <h3 className="h3Style">{name}</h3>
            <h3 className="h3Style">{type}</h3>
            <strong className="strongStyle">{dimension}</strong>
        </article>
    )
}