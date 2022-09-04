import CreateVideogame from '../CreateVideogame/CreateVideogame'
import './Admin.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeName, getAllGames, getAllVideoGamesAdmin, hideVideoGame, getGameById, showVideoGame, getAllDisableVideogame } from '../../redux/Actions/Index'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ListVideogame from '../CreateVideogame/ListVideogame/ListVideogame'
import { useParams } from 'react-router-dom'



export default function Admin() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [name, setName] = useState("")
    const videogames = useSelector(state => state.hidevideogames);
    const disableVideogames=useSelector(state=>state.getAlldisableGame)
    const [show,setShow]=useState({
        disabled:false
    });
    // console.log(disableVideogames);



    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getAllDisableVideogame());
    }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getAllGames(name))
    };
    function handleOnChange(e) {
        e.preventDefault()
        setName(e.target.value)
        dispatch(getAllGames(name))
    }
    //const videogamesAdmin= videogames.slice(0,8)
    //useEffect(()=>{
    // dispatch(getGameById(id))
    // },[dispatch,id])
    function handleHide(ev) {
        ev.preventDefault()
        
        dispatch(hideVideoGame(ev.target.value))
    }

    function showGame(e) {
        e.preventDefault()
        dispatch(showVideoGame(e.target.value))

    }
    function handleSubmitOcultados(){
        setShow({...show,disabled:true})
        dispatch(getAllDisableVideogame());
    }
    function handleRegresar(){
        setShow({...show,disabled:false})
        // dispatch(getAllDisableVideogame());
    }
    // /disabled/:id

    //function handleChangeName(e){
    // e.preventDefault()
    //dispatch(changeName())
    // }


    return (
        <div className='Search-Filters'>


            <div className='filters'>
                <div className="show-profile-settings">
                    <div>
                        <img width={150} src='https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369' alt='imagen de perfil'></img>
                    </div>
                    <div className='settings-admin'>
                        <Link to="/admin/createvideogames">
                            <button><span >  Create videogame  </span></button>
                        </Link>
                        <Link to="/admin/editvideogames">
                            <button className="bottom" type="submit" onClick={(e) => handleSubmit(e)} > EDIT GAMES</button>
                        </Link>
                        <button><span> SETTINGS </span></button>
                    </div>

                </div>
            </div>
            <div className="conteinerCart_admin">
                <div>
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

                {
                    // videogames && videogames.length ?
                        <div id="conteinerCart2">
                        { (!show.disabled) &&( videogames?.map(item => {
                                return (
                                    <div key={item.id} className="item">
                                        <div className="props">
                                        <img src={item.image} alt={item.id}></img>
                                        <h1>{item.name}</h1>
                                        <h3>$ {item.price}</h3>
                                        </div>
                                        <div className="buttons">
                                        <Link to={`/admin/editgame/${item.id}`}>
                                            <button type="button" >Editar </button>
                                        </Link>
                                        {/* <Link to= {`/admin/${item.id}`}> */}
                                        <button type="button"  onClick={(ev) => handleHide(ev)} value={item.id}> Deshabilitar </button>
                                        <button type="button"   onClick={(e) => showGame(e)} value={item.id}> Habilitar </button>
                                        </div>
                                        {/* </Link> */}
                                        {/* <button onClick={() => deleteItem(item.id)}>Delete</button> */}
                                    </div>
                                )
                            })
                            )?(!show.disabled) &&( videogames?.map(item => {
                                return (
                                    <div key={item.id} className="item">
                                        <div className="props">
                                        <img src={item.image} alt={item.id}></img>
                                        <h1>{item.name}</h1>
                                        <h3>$ {item.price}</h3>
                                        </div>
                                        <div className="buttons">
                                        <Link to={`/admin/editgame/${item.id}`}>
                                            <button type="button" >Editar </button>
                                        </Link>
                                        {/* <Link to= {`/admin/${item.id}`}> */}
                                        <button type="button"  onClick={(ev) => handleHide(ev)} value={item.id}> Deshabilitar </button>
                                        {/* <button type="button"   onClick={(e) => showGame(e)} value={item.id}> Habilitar </button> */}
                                        </div>
                                        {/* </Link> */}
                                        {/* <button onClick={() => deleteItem(item.id)}>Delete</button> */}
                                    </div>
                                )
                            })
                            ):(show.disabled) &&( disableVideogames?.map(item => {
                                return (
                                    <div key={item.id} className="item">
                                        <div className="props">
                                        <img src={item.image} alt={item.id}></img>
                                        <h1>{item.name}</h1>
                                        <h3>$ {item.price}</h3>
                                        </div>
                                        <div className="buttons">
                                        <Link to={`/admin/editgame/${item.id}`}>
                                            <button type="button" >Editar </button>
                                        </Link>
                                        {/* <Link to= {`/admin/${item.id}`}> */}
                                        {/* <button type="button"  onClick={(ev) => handleHide(ev)} value={item.id}> Deshabilitar </button> */}
                                        <button type="button"   onClick={(e) => showGame(e)} value={item.id}> Habilitar </button>
                                        </div>
                                        {/* </Link> */}
                                        {/* <button onClick={() => deleteItem(item.id)}>Delete</button> */}
                                    </div>
                                )
                            })
                            )
                            }

                            
                        
                        </div>
                        // :<div>
                        // </div>

                }
            </div>



        </div>
    )
}
