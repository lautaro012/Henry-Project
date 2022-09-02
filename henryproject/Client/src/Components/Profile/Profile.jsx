import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { getUser, clearUser } from '../../redux/Actions/Index'
import { useState } from 'react'
import Favoritos from '../Favoritos/Favoritos'
import Cart from '../Cart/Cart'
import DatosPerfil from './DatosPerfil'
import DatosJuegos from './DatosJuegos'

export function Profile() {

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

        
    }, [])
    
    let userdetails = useSelector(state => state.user)

    //function handleCart(){
       // e.preventDefault()
        //dispatch()
    //}
    
    console.log('el user del state es ', userdetails)
  


    }, [dispatch])

    let userdetails = useSelector(state => state.user)
    const [render, setRender] = useState("perfil")

    console.log("USER DETAILS", userdetails)

    return (
        <div className='Profile'>

            <div className='User_options_conteiner'>
                <aside className='User_options'>
                    <h1>Usuario</h1>
                    <button onClick={() => setRender("perfil")}>Mi perfil</button>
                    <button onClick={() => setRender("juegos")}>Juegos</button>
                    <button onClick={() => setRender("favoritos")}>Favoritos</button>
                    <button onClick={() => setRender("cart")}>Cart</button>
                </aside>
            </div>

            <div className='User_data_conteiner'>
                <div className='User_data'>
                    <h1>Datos</h1>
                    {
                        render && render === "perfil" ?
                        <DatosPerfil data={userdetails}></DatosPerfil>
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
                        null
                    }
                </div>
            </div>

        </div>
    )
}