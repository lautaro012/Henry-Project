import CreateVideogame from '../CreateVideogame/CreateVideogame'
import './Admin.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { getAllGames } from '../../redux/Actions/Index'
import { Link } from 'react-router-dom'


export default function Admin () {
    const dispatch= useDispatch()
    const [name,setName]= useState("")

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getAllGames(name))
    };
    function handleOnChange(e){
        e.preventDefault()
        setName(e.target.value)
        dispatch(getAllGames(name))
    }
    return (
        <div className='Search-Filters'>

        <div>
        <input
            id="search"
            className="search"
            type="text"
            //value={name} 
            onChange= {(e) => handleOnChange(e)}
            placeholder="Buscar videojuego..."
          />
          <button className ="bottom" type="submit" onClick= {(e) => handleSubmit(e)}> Buscar </button>   
        </div>

        <div className='filters'>
            <div className="show-profile-settings">
                <div>
                    <img width={150} src='https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369' alt='imagen de perfil'></img>
                </div>
                <div className='settings-admin'>
                        
                    <button><span >  CREAR VIDEOJUEGO  </span></button> 
                   <Link to= "/admin/editgames"> 
                   <button className ="bottom" type="submit" onClick= {(e) => handleSubmit(e)} > EDIT GAMES</button> 
                   </Link>
                    <button><span> SETTINGS </span></button>
                </div>

            </div>

            <div className='show-current-setting-admin'>
                <div className='half'>
                    <CreateVideogame></CreateVideogame>
                </div>
                <div className='half'>
                    <span> PREVIEW </span>
                </div>
            </div>
        </div>
   
    </div>
    )
}