import React from "react";
import './Paginado.css'


export default function Paginado ({ paginado, allVideogames, VideogamesPerPage}) {

    const pageNumber = []

    for (let i = 0; i < Math.floor(allVideogames/VideogamesPerPage); i++) {
        pageNumber.push(i+1)        
    }

    
    return (
        <div className="Paginado-conteiner">        
                <ul className="Paginado">
                    {
                    pageNumber?.map(num => (
                        <li className="number" key={num}>
                            <button className="Paginado-button" onClick={() => paginado(num)}> {num} </button>
                        </li>
                    ))}
                </ul>

        </div>
        )
    
}