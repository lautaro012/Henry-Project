import { useDispatch } from 'react-redux'
import { filterGames } from '../../redux/Actions/Index'
import './Filter.css'



export default function Filter ({genres, platforms, tags, setFilters}) {

    const dispatch = useDispatch()
    
   let genresfilter = []
   let platformsfilter = []
   let tagsfilter = []
   function handleGenres(e) {
        e.preventDefault();
        let genres = document.getElementById('genres').value
        if(genres=== 'all') {
            genresfilter = []
            return setFilters(false)
        }
        genresfilter.push(genres)
        dispatch(filterGames(genresfilter, 'genres'))
        setFilters(true)
   }
   function handleTags(e) {
        e.preventDefault();
        let tags = document.getElementById('tags').value
        if(tags=== 'all') {
            tagsfilter = []
            return setFilters(false)
        }
        tagsfilter.push(tags)
        dispatch(filterGames(tagsfilter, 'tags'))
        setFilters(true)
    }
    function handlePlatforms(e) {
        e.preventDefault();
        let platforms = document.getElementById('platforms').value
        if(platforms=== 'all') {
            platformsfilter = []
            return setFilters(false)
        }
        platformsfilter.push(platforms)
        dispatch(filterGames, 'platforms')
        setFilters(true)
   }


    return (
        <div className='Filter-box'>
            <h4>Platforms:</h4>
            <select id='platforms' defaultValue={''} onChange={(e) => handlePlatforms(e)}>
                <option value='all' >All</option>
                {
                    platforms.map(plat => {
                        return(
                            <option 
                            key={plat.id}
                            value={plat.name}
                            >{plat.name}</option>
                        )
                    })
                }
            </select>
            <h4>Genres:</h4>
            <select id='genres' defaultValue={''} onChange={(e) => handleGenres(e)}>
                <option value= 'all'> All </option>
                {
                    genres.map(plat => {
                        return(
                            <option 
                            key={plat.id}
                            value={plat.name}
                            >{plat.name}</option>
                        )
                    })
                }
            </select>
            
            <h4>Tags:</h4>
            <select id='tags' defaultValue={''} onChange={(e) => handleTags(e)}>
                <option value= 'all' > All </option>
                {
                     tags.map((plat, index) => {
                        return(
                            <option 
                            key={index}
                            value={plat}
                            >{plat}</option>
                        )
                    })
                }
            </select>

            <div className='Show-filter-box'>
                
            </div>
        
        </div>
    )
}