import CreateVideogame from '../CreateVideogame/CreateVideogames'
import './Admin.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeName, getAllGames, getAllVideoGamesAdmin, hideVideoGame, getGameById, showVideoGame, getAllDisableVideogame } from '../../redux/Actions/Index'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ListVideogame from '../CreateVideogame/ListVideogame/ListVideogame'
import { useParams } from 'react-router-dom'
import CardHover from '../NewCard/CardHover'



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

    const user = JSON.parse(localStorage.getItem("user"));

    const[render , setRender] = useState('admin')

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
        console.log(e.target.value)
        console.log(showVideoGame(e.target.value))
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
        <div className='Admin-conteiner'>
            <div className='Admin-settings'>
                <aside className='Admin-aside'> 
                    <h1>Welcome {user.user.userName}</h1>
                    <img width={200} src={user.user.image} alt={user.user.id_name}></img>
                    <button onClick={() => setRender("admin")}> Create New Game </button>
                    <button onClick={() => setRender("edit")}> Edit Game </button>
                    <button onClick={() => setRender("users")}>Edit Users</button>
                </aside>
            </div>
            <div className="Admin-show-settings">
                    {
                        render && render === "admin" ?
                        // <DatosPerfil setUserLogged={setUserLogged} data={userdetails}></DatosPerfil>
                        <CreateVideogame></CreateVideogame>
                        :
                        render === "edit" ?
                        //pasar el boton de hacer esconder
                        <ListVideogame
                            handleOnChange={handleOnChange}
                            disableVideogames={disableVideogames}
                            handleSubmit={handleSubmit}
                            handleRegresar={handleRegresar} 
                            handleSubmitOcultados={handleSubmitOcultados} 
                            show={show}
                            videogames={videogames} 
                            name={name}
                            showGame={showGame}
                            handleHide={handleHide}
                        ></ListVideogame>
                        :
                        render === "users" ?
                        //falta el editar usuarios
                        null
                        :
                        render === 'editgame' ?
                        null
                        :
                        null
                    }

        </div>
        </div>
    )
}
