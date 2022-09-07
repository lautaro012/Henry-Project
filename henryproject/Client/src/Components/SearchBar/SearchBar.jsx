import { useNavigate  } from "react-router-dom";
import './SearchBar.css'
import { useState } from "react";
import lupita from '../../Style/Imagenes/lupa.png'
import { clearVideogames } from '../../redux/Actions/Index'

export default function SearchBar({ onSearch }) {

    const [name, setName] = useState('')
    const navigate = useNavigate()

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate("../home/games", { replace: true });
        clearVideogames() 
        onSearch(name)
        // setName('')
    }



    return (

        <div className="cont-searchbar">
            <form onSubmit={(e) => handleSubmit(e)}>
                <button
                    className="HOME-BTN"
                    type='submit'
                >
                    <img src={lupita} alt="lupa" />
                </button>
                <input
                    className="INPUT-SEARCH"
                    type='text'
                    placeholder="Search..."
                    onChange={(e) => handleInputChange(e)}
                />
            </form>
        </div>

    )
}