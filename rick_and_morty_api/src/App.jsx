import './App.css'
import { Episodes } from './pages/Episodes'
import { Characters } from './pages/Characters'
import { Locations } from './pages/Locations'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'
import logo from './image/imgLogoApi.png'


function App() {

  return (
      <Router>
          <header className='Header'>
          <div className='logoDiv'>
            <img src={logo} className="App-logo" alt={logo} />
            </div>
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
              <Route path="/characters" element={<Characters />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/locations" element={<Locations />} />
            </Routes>
          </div>
      </Router>
  )
}

export default App
