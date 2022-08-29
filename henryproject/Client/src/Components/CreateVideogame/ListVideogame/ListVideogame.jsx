
import React from "react"
import './ListVideogame.css';

export default function ListVideogame(props){
  return(
    <div key={props.id} className="containerVideogame">
      <div className="subcontainer1">
      <h2>{props.tittle}</h2>
      <img src={props.image} alt="No se encontró imagen"  width="300px" height="150px"/>
      <p>$/. {props.price}</p>
      <p>{props.genres}</p>
      </div>
      <div  className="subcontainer2">
          <p>Editar </p>
          <p>Ocultar </p>
          
      </div>
      </div>
      )
      }