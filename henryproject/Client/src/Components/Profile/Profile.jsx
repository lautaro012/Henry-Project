import './Profile.css'

export function Profile () {

    

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
                <div className='settings'>
                        
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