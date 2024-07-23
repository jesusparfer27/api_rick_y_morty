import {useState, useEffect} from 'react'
import { Episodes } from '../pages/episodios/Episodes'

const Header = () => {

    const [seccion, setSeccion] = useState("categories")
    

    return (
        <header className="NavHeader">
            <div className="NavContainer">
                <div className="NavBlock Logo">
                    <img src={"https://tse3.mm.bing.net/th?id=OIP.7NrJBkCpCC2GOV-YPQmWNwHaDf&pid=Api&P=0&h=180"} alt="" />
                </div>
                <div className="NavBlock SearchBar">
                        <input type="text"
                        onChange={ handleFilterByName }
                        value={filter}
                        placeholder="Buscar carácteres (4 chars)" 
                        style={{width: "12.5rem"}
                }/>
                    {filter} ({info.count})
                    <button className="SearchBar" style={{background: "red", color: "white", padding: ".3125rem", width: "1.25rem", height: "1.25rem", fontSize:"small"}} onClick={
                        () => {
                            setFilter("")
                            getItem("https://rickandmortyapi.com/api/")
                        }
                    }>X</button>
                </div>
                <div className="NavBlock BurgerMenu">
                    <nav>
                        <ul>
                             <li><button className='NavButton' onClick={() => setSeccion("episodes")}>Nav Button</button></li>

                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header