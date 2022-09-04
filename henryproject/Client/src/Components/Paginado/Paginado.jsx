import React from "react";
import './Paginado.css'


export default function Paginado ({ paginado, allVideogames, VideogamesPerPage, actual}) {

    const pageNumber = []
    const totalpages = Math.floor(allVideogames/VideogamesPerPage)
   
    // for (let i = 0; i < Math.floor(allVideogames/VideogamesPerPage); i++) {
    //     pageNumber.push(i+1)        
    // }

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
                    <span className="paginado-span"> {`Page ${actual} from `} {totalpages=== 0 ? 1 : totalpages} </span>  
                    <div>
                        <button  onClick={() => handlePaginado("prev")}> PREV </button>
                        <button onClick={() => handlePaginado("next")}> NEXT </button>
                    </div>
        </div>
        )
    
}