import { Link } from "react-router-dom";


export default function SearchBar () {

    return (
        <div className="home-navbar">
          BARRA DE NAVEGACION
          <button> DESCUBRI EL JUEGO PARA VOS </button>
          <Link to='games'> <button> EXPLORA NUESTRO CATALOGO </button> </Link>
        </div>
    )
}