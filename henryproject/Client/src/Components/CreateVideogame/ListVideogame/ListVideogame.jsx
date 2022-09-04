
import React from "react"
import './ListVideogame.css';
import CardHover from "../../NewCard/CardHover";
import { Link } from "react-router-dom";

export default function ListVideogame({ showGame, handleHide, handleOnChange, disableVideogames, handleSubmit, handleRegresar, handleSubmitOcultados, show, videogames, name}){

  // function handleHide(e){
  //   e.preventDefault()
  //   dispatch(hideVideoGame(props.id))
  // }
  // function handleChangeName(e){
  //   e.preventDefault()
  //   dispatch(changeName())
  // }
  return(
    <div>
    <div className='searchbar-admin'>
        <input
            id="search"
            className="search"
            type="text"
            value={name}
            onChange={(e) => handleOnChange(e)}
            placeholder="Buscar videojuego..."
        />
        <button className="bottom" type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
        {
        (!show.disabled) && (<button onClick={()=>handleSubmitOcultados()}>VER VIDEOJUEGOS OCULTADOS</button>)
        }
        {
        (show.disabled) && (<button onClick={()=>handleRegresar()}>REGRESAR</button>)
        }
    </div> 

<div className="Admin-games">
    { 
      
      (!show.disabled) &&( videogames?.map(item => {
                return (
                    <div className="card-videogame-admin">
                        <CardHover
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        />
                      <div className="buttons">
                        <Link to={`/admin/editgame/${item.id}`}>
                            <button type="button" >Editar </button>
                        </Link>
                        {/* <Link to= {`/admin/${item.id}`}> */}
                        <button type="button"  onClick={(ev) => handleHide(ev)} value={item.id}> Deshabilitar </button>
                        <button type="button"   onClick={(e) => showGame(e)} value={item.id}> Habilitar </button>
                      </div>
                    </div>
                )
            })
            )?(!show.disabled) &&( videogames?.map(item => {
                return (
                    <div className="card-videogame-admin">
                        <CardHover
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        />
                        <div className="buttons">
                        <Link to={`/admin/editgame/${item.id}`}>
                            <button type="button" >Editar </button>
                        </Link>
                        {/* <Link to= {`/admin/${item.id}`}> */}
                        <button type="button"  onClick={(ev) => handleHide(ev)} value={item.id}> Deshabilitar </button>
                        <button type="button"   onClick={(e) => showGame(e)} value={item.id}> Habilitar </button>
                      </div>
                  </div>
                )
            })
            ):(show.disabled) &&( disableVideogames?.map(item => {
                return (
                    <div className="card-videogame-admin">
                        <CardHover
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        />
                        <div className="buttons">
                        <Link to={`/admin/editgame/${item.id}`}>
                            <button type="button" >Editar </button>
                        </Link>
                        {/* <Link to= {`/admin/${item.id}`}> */}
                        <button type="button"  onClick={(ev) => handleHide(ev)} value={item.id}> Deshabilitar </button>
                        <button type="button"   onClick={(e) => showGame(e)} value={item.id}> Habilitar </button>
                      </div>
                  </div>
                  )
            })
            )
    }                                     
</div>

</div> 
      )
      }