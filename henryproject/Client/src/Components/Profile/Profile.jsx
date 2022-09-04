import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { getUser, clearUser } from '../../redux/Actions/Index'
import { useState } from 'react'
import Favoritos from '../Favoritos/Favoritos'
import Cart from '../Cart/Cart'
import DatosPerfil from './DatosPerfil'
import DatosJuegos from './DatosJuegos'
import Orders from './Orders'

export function Profile({ setUserLogged }) {

    let dispatch = useDispatch()

    useEffect(() => {
        let usermail = JSON.parse(localStorage.getItem('user'))
        if (usermail.user.mail) {
            // console.log('log normal', usermail.user.mail)
            usermail = usermail.user.mail
        } else {
            // console.log('google', usermail.user.emails[0].value)
            usermail = usermail.user.emails[0].value
        }
        dispatch(getUser(usermail))
        return dispatch(clearUser())

    }, [dispatch])

    let userdetails = useSelector(state => state.user)
    const [render, setRender] = useState("perfil")

    return (
        <div className='Profile'>

            <div className='User_options_conteiner'>
                <aside className='User_options'>
                    <div>
                        <h1>Welcome {userdetails.userName}</h1>
                        <img src={userdetails.image} alt={userdetails.name}></img>
                    </div>
                    <button onClick={() => setRender("perfil")}>My profile</button>
                    <button onClick={() => setRender("juegos")}>My games</button>
                    <button onClick={() => setRender("orders")}>My orders</button>
                    <button onClick={() => setRender("favoritos")}>Favorites</button>
                    <button onClick={() => setRender("cart")}>Cart</button>
                </aside>
            </div>

            <div className='User_data_conteiner'>
                <div className='User_data'>
                    {
                        render && render === "perfil" ?
                            <DatosPerfil setUserLogged={setUserLogged} data={userdetails}></DatosPerfil>
                            :
                            render === "juegos" ?
                                <DatosJuegos></DatosJuegos>
                                :
                                render === "favoritos" ?
                                    <Favoritos></Favoritos>
                                    :
                                    render === "cart" ?
                                        <Cart></Cart>
                                        :
                                        render === "orders" ?
                                            <Orders></Orders>
                                            :
                                            null
                    }
                </div>
            </div>

        </div>
    )
}