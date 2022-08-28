import { useState } from 'react'
import './Profile.css'

export function Profile () {


    function handleClick() {
        console.log(profile.user)
    }
    let profile = JSON.parse(localStorage.getItem('user'))


     let displayName = `Bienvenid@ ${profile.user.displayName || profile.user.userName}`
    let photos = profile.user.photos[0].value
    console.log(photos)
       
    
        
  

    return (
        <div className='Search-Filters'>

        <div>
            SEARCHBAR
        </div>

        <div className='filters'>
            <div className="show-profile-settings">
                <div>
                    <img width={150} src={`${photos}`} alt='imagen de perfil'/>
                </div>
                <div className='settings'>
                    <button onClick={handleClick} >probar consola</button>
                   <span>{displayName}</span>
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
   
    </div>
    )
}