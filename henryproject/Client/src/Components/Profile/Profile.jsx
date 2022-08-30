import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import {getUser} from '../../redux/Actions/Index'

export function Profile () {

    let dispatch = useDispatch()

    let userdetails = useSelector(state => state.user)

    console.log('el user del state es ', userdetails)
    
    useEffect(() => {
        let usermail = JSON.parse(localStorage.getItem('user'))
        if(usermail.user.mail) {
            console.log('log normal', usermail.user.mail)
            usermail = usermail.user.mail
        } else {
            console.log('google', usermail.user.emails[0].value)
            usermail = usermail.user.emails[0].value
        }
        dispatch(getUser(usermail))
    }, [])

        
  

    return (
        <div className='Search-Filters'>

        <div>
            SEARCHBAR
        </div>

        <div className='filters'>
            <div className="show-profile-settings">
                    <span >  MI PERFIL  </span>  

                    <span > MY GAMES</span>

                    <span> SETTINGS </span>
                </div>

            </div>

            <div className='show-current-setting'>
                <div className='Games-Cards-Div'>
                   MY GAMES <br></br>
                   SETTINGS <br></br>
                </div>
            </div>
   
    </div>
    )
}