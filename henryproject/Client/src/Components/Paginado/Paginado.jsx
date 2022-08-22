import React from "react";
import './Paginado.css'


export default function Paginado ({ paginado, allVideogames, VideogamesPerPage, actual}) {

    const pageNumber = []

    for (let i = 0; i < Math.floor(allVideogames/VideogamesPerPage); i++) {
        pageNumber.push(i+1)        
    }

    function handlePaginado(orden){
        if(orden === "prev"){
            if( (actual - 1) > 0 ){
                paginado(actual - 1)
            }
        }
        if(orden === "next"){
            if((actual +1 ) <= pageNumber.length ){
                paginado(actual + 1)
            }
        }
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
                <div id="prev_next">
                    <button onClick={() => handlePaginado("prev")}>PREVIUS</button>
                    <button onClick={() => handlePaginado("next")}>NEXT</button>
                </div>
        </div>
        )
    
}