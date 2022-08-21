import './Filter.css'
export default function Filter ({genres, platforms, tags}) {

    return (
        <div className='Filter-box'>
            <h4>Platforms:</h4>
            <select>
                <option>All</option>
                {
                    platforms.map(plat => {
                        return(
                            <option key={plat.id}>{plat.name}</option>
                        )
                    })
                }
            </select>
            <h4>Genres:</h4>
            <select>
                <option> All </option>
                {
                    genres.map(plat => {
                        return(
                            <option key={plat.id}>{plat.name}</option>
                        )
                    })
                }
            </select>
            <h4>Tags:</h4>
            <select>
                {
                     tags.map((plat, index) => {
                        return(
                            <option key={index}>{plat}</option>
                        )
                    })
                }
            </select>
        
        </div>
    )
}