import { Link } from "react-router-dom";
import './SearchBar.css'
import { useState } from "react";
import lupita from '../../Style/Imagenes/lupa.png'

export default function SearchBar({ onSearch }) {

    const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(name)
        // setName('')
    }



    return (
        <div className="home-navbar">
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
            <Link to='/home'> <button> Discover your game ! </button> </Link>
            <Link to='/home/games'> <button> Search in our game list </button> </Link>
        </div>
    )
}