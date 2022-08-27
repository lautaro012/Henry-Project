import './Profile.css'

export function Profile () {


        let profile = localStorage.getItem('usuario')
        let displayName = ''
        let photos = ''
    
        
  

    return (
        <div className='Search-Filters'>

        <div>
            SEARCHBAR
        </div>

        <div className='filters'>
            <div className="show-profile-settings">
                <div>
                    <img width={150} src={photos} alt='imagen de perfil'/>
                    {displayName}
        
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