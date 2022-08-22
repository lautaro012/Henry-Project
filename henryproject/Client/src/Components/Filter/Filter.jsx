import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterGames } from '../../redux/Actions/Index'
import './Filter.css'



export default function Filter ({genres, platforms, tags, setRender}) {

    let dispatch =  useDispatch()

    let TagsToFilter=[]
    function handleTags(e) {
        TagsToFilter.push(e.target.value)
    }


    function handleFilter(e) {
        let platformby = document.getElementById('platforms').value
        let genreby = document.getElementById('genres').value
        console.log(platformby)
        console.log(genreby)
        dispatch(filterGames({platformby, genreby}))
    }
    return (
        <div className='Filter-box'>
            <h4> Platforms:</h4>
            <select id='platforms' defaultValue={'all'} onChange={(e) => handleFilter(e)}>
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
            <h4> Select a Genre:</h4>
            <select id='genres' defaultValue={'all'}  onChange={(e) => handleFilter(e)}>
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
        
        </div>
    )
}