import { Link } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar () {

  
    return (
        <div className="home-navbar">
          <div className="NAV-SEARCH">
              <form className={'FORM-NAV'}>
                  <input
                  className="INPUT-SEARCH"
                  type = 'text'
                  placeholder="Buscar..."    
                  
                  />
                  <button
                  className="HOME-BTN"
                  type = 'submit'
                  >
                  SEARCH
                  </button>    
              </form>
          </div>
          <Link to='/home'> <button> DESCUBRI EL JUEGO PARA VOS </button> </Link>
          <Link to='games'> <button> EXPLORA NUESTRO CATALOGO </button> </Link>
        </div>
    )
}