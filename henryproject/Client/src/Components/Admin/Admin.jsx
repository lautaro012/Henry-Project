import CreateVideogame from '../CreateVideogame/CreateVideogames'
import './Admin.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeName, getAllGames, getAllVideoGamesAdmin, hideVideoGame, getGameById, showVideoGame, getAllDisableVideogame, getAllUsers, banUser } from '../../redux/Actions/Index'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ListVideogame from '../CreateVideogame/ListVideogame/ListVideogame'
import { useParams } from 'react-router-dom'
import CardHover from '../NewCard/CardHover'
import create from '../../Style/Imagenes/create.png'
import edit from '../../Style/Imagenes/edit.png'
import admin from '../../Style/Imagenes/admin.png'
import ban from '../../Style/Imagenes/ban.png'



export default function Admin() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [name, setName] = useState("")
    const videogames = useSelector(state => state.hidevideogames);
    const disableVideogames=useSelector(state=>state.getAlldisableGame)
    const allUsers = useSelector(state => state.allUsers)
    console.log(allUsers)
    const [show,setShow]=useState({
        disabled:false
    });
    // console.log(disableVideogames);

    const user = JSON.parse(localStorage.getItem("user"));

    const[render , setRender] = useState('users')

    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getAllDisableVideogame());
        dispatch(getAllUsers())
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
    function handleBanClick(e) {
        dispatch(banUser(e.target.value))
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
                    <h2 className='adminUserH1'>Welcome {user.user.userName}</h2>
                    <img width={200} src={user.user.image} alt={user.user.id_name}></img>
                    <button className='adminButtonStyle' onClick={() => setRender("admin")}> 
                        <div className='adminButtonStyleDiv'>
                        <img src={create} alt="create" width='20' className='adminImageButtonStyle'/>
                        <span>Create New Game </span>
                        </div>
                    </button>
                    <button className='adminButtonStyle' onClick={() => setRender("edit")}> 
                        <div className='adminButtonStyleDiv'>
                        <img src={edit} alt="edit" width='20' className='adminImageButtonStyle'/>
                        <span>Edit Game</span>
                        </div>
                    
                    </button>
                    <button className='adminButtonStyle' onClick={() => setRender("users")}>
                        <div className='adminButtonStyleDiv'>
                        <img src={edit} alt="edit" width='20' className='adminImageButtonStyle'/>
                        <span>Edit Users</span>
                        </div>
                    </button>
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
                        <div>
                            <h2 className='adminUserH1'>Usuarios Registrados:</h2>
                            <div className='AdminAllUsersBiggestDiv'>
                            {allUsers.length ?
                                allUsers.map(e => 
                                    { return (
                                        !e.admin ? 
                                        <span className='adminUsersDivConfig'>
                                            <span className='adminUsersDivCard'>
                                            <img src={e.image} width='60' className='adminImgUserCard'></img>
                                            <span className='adminUserLastFlex'>
                                                <span className='adminSpanUserCard'>{e.userName}</span>
                                                <h3>USER ID:</h3> 
                                                <p>"{e.id_name}"</p>
                                                <h3>MAIL:</h3>
                                                <p>"{e.mail}"</p>
                                                <h3>CREATED AT:</h3>
                                                <p>"{e.createdAt}"</p>
                                                
                                                    <button onClick={(e) => handleBanClick(e)} value={e.mail} >
                                                    <div className='adminButtonStyleDiv'>
                                                    <img src={ban} alt="ban" width='20' className='adminImageButtonStyle'/>
                                                    <span>Disable User</span>
                                                    </div>
                                                    </button>

                                                    <button>
                                                    <div className='adminButtonStyleDiv'>
                                                    <img src={admin} alt="admin" width='20' className='adminImageButtonStyle'/>
                                                    <span>Set User As Admin</span>
                                                    </div>
                                                </button>
                                            </span>
                                            
                                            </span>
                                        </span> : null
                                    )}
                                ) : <h4>no hay usuarios registrados</h4>}</div>
                        </div>
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
