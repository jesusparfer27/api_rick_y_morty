import './App.css'
import { Episodes } from './episodios/Episodes'
import { Locations } from './ubicaciones/Locations'
import { Characters } from './personajes/Characters'
// import { Categories } from './categories/Categories'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <main className='Container'>
          <header className='Header'>

            <h1 className='Header-Title'>Rick and Morty</h1>
            <nav>
              <ul className='Nav-Link'>
                {/* v1  */}
                {/* <li><button onClick={ () => (setSeccion("characters"))}>Personajes</button></li>
        //                     <li><button onClick={ () => (setSeccion("characters"))}>Personajes</button></li>
        //                     <li><button onClick={ () => (setSeccion("characters"))}>Personajes</button></li> */}

                {/* v2. Sistema nuevo con React Router */}
                {/* <li><Link to="/characters">Personajes</Link></li>
        //                     <li><Link to="/episodes">Episodios</Link></li>
        //                     <li><Link to="/locations">Ubicaciones</Link></li> */}

                {/* v3.  Navegación con ReactcRouter */}
                <li><NavLink to="/characters" className="Button-Link">Personajes</NavLink></li>
                <li><NavLink to="/episodes" className="Button-Link">Episodios</NavLink></li>
                <li><NavLink to="/locations" className="Button-Link">Ubicaciones</NavLink></li>

              </ul>
            </nav>
          </header>
          {/* Aqui creamos un "switch" de useState seccion */}
          {/* {seccion == "characters" && <Characters />}
        //         {seccion == "locations" && <Locations />}
        //         {seccion == "episodes" && <Episodes />} */}

          {/* Esta versión utiliza react-router */}
          <div className="Content">
            {/* Posibles rutas */}
            <Routes>
              <Route path="/personajes" element={<Characters />} />
              <Route path="/episodios" element={<Episodes />} />
              <Route path="/ubicaciones" element={<Locations />} />
              {/* Ruta principal  */}
              {/* //                 <Route path="/" element={<Categories/>} /> */}
            </Routes>
          </div>
        </main>
      </Router>
      {/* <Categories/> */}
    </>
  )
}

export default App
