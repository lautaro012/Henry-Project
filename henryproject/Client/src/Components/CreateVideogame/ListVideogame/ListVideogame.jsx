
import React from "react"
import './ListVideogame.css';
import { useDispatch } from "react-redux";
import { hideVideoGame,changeName } from "../../../redux/Actions/Index";

export default function ListVideogame(props){
  const dispatch=useDispatch()

  function handleHide(e){
    e.preventDefault()
    dispatch(hideVideoGame(props.id))
  }
  function handleChangeName(e){
    e.preventDefault()
    dispatch(changeName())
  }
  return(
    <div key={props.id} className="containerVideogame">
      <div className="subcontainer1">
      <h2>{props.tittle}</h2>
      <img src={props.image} alt="No se encontró imagen"  width="200px" height="150px"/>
      <p>$/. {props.price}</p>
      <p>{props.genres}</p>
      </div>
      <div  className="subcontainer2">
          <button type="button" onClick={e=>handleChangeName(e)}placeholder="editar..." >Editar </button>
          <button type="button" onClick={e=>handleHide(e)}placeholder="ocultar...">Ocultar </button>
          
      </div>
      </div>
      )
      }