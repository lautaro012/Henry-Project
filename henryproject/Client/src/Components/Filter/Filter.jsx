import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterGames } from '../../redux/Actions/Index'
import './Filter.css'



export default function Filter ({genres, platforms, tags, setFilters}) {

    const dispatch = useDispatch()
    const [genresfilter, setGenreFilter] = useState([])
    const [platformsfilter, setPlatformsFilter] = useState([])
    const [tagsfilter, setTagsFilter] = useState([])
    
   function handleGenres(e) {
        e.preventDefault();
        let genres = document.getElementById('genres').value
        if(genres=== 'all') {
            setGenreFilter([])
            return setFilters(false)
        }
        setGenreFilter([...genresfilter, ...genres])
        dispatch(filterGames(genresfilter, 'genres'))
        setFilters(true)
   }
   function handleTags(e) {
        e.preventDefault();
        let tags = document.getElementById('tags').value
        if(tags=== 'all') {
            setTagsFilter([])
            return setFilters(false)
        }
        setTagsFilter([...tagsfilter, ...tags])
        dispatch(filterGames(tagsfilter, 'tags'))
        setFilters(true)
    }
    function handlePlatforms(e) {
        e.preventDefault();
        let platforms = document.getElementById('platforms').value
        if(platforms=== 'all') {
            setPlatformsFilter([])
            return setFilters(false)
        }
        setPlatformsFilter([...platformsfilter, ...platforms])
        dispatch(filterGames, 'platforms')
        setFilters(true)
   }

   console.log(genresfilter)
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
                <div className='show-filterss'>
                    {
                        genresfilter?.map(genres => {
                            return (
                            <div className='SEPARATED'>
                                <span>{genres}</span>
                               
                            </div>     
                            )
                        })
                    }
                </div>
                <div className='show-filterss'>
                    {
                        tagsfilter?.map(tags => {
                            return (
                                <div className='SEPARATED'>
                                    <span>{tags}</span>
                                
                                </div>     
                                )
                        })
                    }
                </div>
                <div className='show-filterss'>
                    { 
                        platformsfilter?.map(plats => {
                            return (
                                <div className='SEPARATED'>
                                    <span>{plats}</span>
                                  
                                </div>     
                                )
                        })
                    }
                </div>
            </div>
        
        </div>
    )
}