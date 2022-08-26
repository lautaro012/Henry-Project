import { Link } from "react-router-dom";
import './SearchBar.css'
import { useState } from "react";

export default function SearchBar ( { onSearch}) {

    const [name, setName] = useState('')
    
    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        onSearch(name)
        // setName('')
    }

    

    return (
        <div className="home-navbar">
          <div className="NAV-SEARCH">
              <form className={'FORM-NAV'} onSubmit={(e) => handleSubmit(e)}>
                  <input
                  className="INPUT-SEARCH"
                  type = 'text'
                  placeholder="Buscar..."    
                  onChange={(e) => handleInputChange(e)}
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
          <Link to='/home/games'> <button> EXPLORA NUESTRO CATALOGO </button> </Link>
        </div>
    )
}