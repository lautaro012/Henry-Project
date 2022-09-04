import React from "react";
import './Paginado.scss'


export default function Paginado ({ paginado, allVideogames, VideogamesPerPage, currentPage}) {

    const totalpages = Math.floor(allVideogames/VideogamesPerPage)
   
    // for (let i = 0; i < Math.floor(allVideogames/VideogamesPerPage); i++) {
    //     pageNumber.push(i+1)        
    // }

    function handlePaginado(orden){
        if(orden === "prev"){
            if( (currentPage - 1) > 0 ){
                paginado(currentPage - 1)
            }
        }
        if(orden === "next"){
            if((currentPage +1 ) <= totalpages ){
                paginado(currentPage + 1)
            }
        }

    }
    
    return (
        <div className="Paginado-conteiner">      
                    {/* <div>
                        <button  onClick={() => handlePaginado("prev")}> PREV </button>
                        <button onClick={() => handlePaginado("next")}> NEXT </button>
                    </div> */}
                       {currentPage !== 1 ? <button onClick={() => handlePaginado("prev")} class="paginate left"><i></i><i></i></button> : <button  onClick={() => handlePaginado("prev")} class="paginate left disabled"><i></i><i></i></button> }
                        {/* <button onClick={() => handlePaginado("prev")} class="paginate left"><i></i><i></i></button> */}
                       
                        <div class="counter">
                            <span className="paginado-span"> {`${currentPage}/`} {totalpages=== 0 ? 1 : totalpages}</span>  
                        </div>
                        
                        {currentPage !== totalpages ? <button onClick={() => handlePaginado("next")} class="paginate right"><i></i><i></i></button> : <button onClick={() => handlePaginado("next")} class="paginate right disabled"><i></i><i></i></button>}
                    </div>
        )
    
}