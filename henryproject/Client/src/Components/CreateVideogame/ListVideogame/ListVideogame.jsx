
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
            className="searchInputAdmin"
            type="text"
            value={name}
            onChange={(e) => handleOnChange(e)}
            placeholder="Buscar videojuego..."
        />
        <button id="button-86" role='button' className='listAdminButton' type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
        {
        (!show.disabled) && (<button id="button-86" role='button' className='listAdminButton' onClick={()=>handleSubmitOcultados()}>Disabled Games</button>)
        }
        {
        (show.disabled) && (<button id="button-86" role='button' className='listAdminButton' onClick={()=>handleRegresar()}>Go Back</button>)
        }
    </div> 

<div className="admin-games">
    { 
      
      (!show.disabled) &&( videogames?.map(item => {
                return (
                    <div className="card-videogame-admin">
                        <CardHover
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        />
                        <div>
                        <Link to={`/admin/editgame/${item.id}`}>
                            <button id="button-86" role='button' className="listVideoGamesButtonStyle" type="button" >Edit </button>
                        </Link>
                        {/* <Link to= {`/admin/${item.id}`}> */}
                        <button id="button-86" role='button' className="listVideoGamesButtonStyle" type="button" onClick={(ev) => handleHide(ev)} value={item.id}> Disable </button>
                        <button id="button-86" role='button' className="listVideoGamesButtonStyle" type="button" onClick={(e) => showGame(e)} value={item.id}> Enable </button>
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
                            <button id="button-86" role='button' type="button" className="listVideoGamesButtonStyle" >Edit </button>
                        </Link>
                        {/* <Link to= {`/admin/${item.id}`}> */}
                         {/* <button id="button-86" role='button' type="button"   onClick={(e) => showGame(e)} value={item.id}> Habilitar </button> */}

                        <button id="button-86" role='button' type="button" className="listVideoGamesButtonStyle"  onClick={(ev) => handleHide(ev)} value={item.id}> Disable </button>

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
                            <button id="button-86" role='button' type="button" className="listVideoGamesButtonStyle" >Edit </button>
                        </Link>
                        {/* <Link to= {`/admin/${item.id}`}> */}
                        {/* <button id="button-86" role='button' type="button"  onClick={(ev) => handleHide(ev)} value={item.id}> Deshabilitar </button> */}

                        <button id="button-86" role='button' type="button"  className="listVideoGamesButtonStyle" onClick={(e) => showGame(e)} value={item.id}> Enable </button>

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