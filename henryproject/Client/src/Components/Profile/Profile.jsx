export function Profile () {

    return (
        <div className='Search-Filters'>

        <div>
            <img alt='imagen de perfil'></img>
            SEARCHBAR
        </div>

        <div className='filters'>
            <div className="show-filters">

                MI PERFIL 

                <span> MY GAMES</span>

                <span> SETTINGS </span>

            </div>
            <div className='Sorts-Games'>
                <div className='Sorts'>
                    <h4 color='#ffffff'> Name/Rate </h4>
                    <select className='SELECT-ORDER' id='orderBy'  defaultValue='orderBy'>
                        <option value='name'> Name </option>
                        <option value='rating'> Rate </option>
                    </select>
                    <h4>In What Order ?</h4>
                    <select className='SELECT-ORDER' id='orderType'  defaultValue='orderType'>
                        <option value='asc'> Ascendent </option>
                        <option value='des'> Descendent </option>
                    </select>

                </div>

                <div className='PAGINADO'>
                    PAGINADO
                </div>
                <div className='Games-Cards-Div'>
                   ACA VAN MIS JUEGOS
                </div>
            </div>
        </div>
    </div>
    )
}