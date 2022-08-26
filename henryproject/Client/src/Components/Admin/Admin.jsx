import CreateVideogame from '../CreateVideogame/CreateVideogame'
import './Admin.css'

export default function Admin () {
    return (
        <div className='Search-Filters'>

        <div>
            SEARCHBAR
        </div>

        <div className='filters'>
            <div className="show-profile-settings">
                <div>
                    <img width={150} src='https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369' alt='imagen de perfil'></img>
                </div>
                <div className='settings-admin'>
                        
                    <button><span >  EDIT PERFIL  </span></button> 

                   <button><span > EDIT GAMES</span></button> 

                    <button><span> SETTINGS </span></button>
                </div>

            </div>

            <div className='show-current-setting-admin'>
                <div className='half'>
                    <CreateVideogame></CreateVideogame>
                </div>
                <div className='half'>
                    <span> PREVIEW </span>
                </div>
            </div>
        </div>
   
    </div>
    )
}