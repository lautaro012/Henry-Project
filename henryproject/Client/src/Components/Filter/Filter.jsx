import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterGames, filterGamesByTags } from '../../redux/Actions/Index'
import './Filter.css'



export default function Filter ({genres, platforms, tags}) {

    let dispatch =  useDispatch()

    let Tagsinfilter = useSelector(state => state.Tagsinfilter)

    function handleFilter() {
        let platformby = document.getElementById('platforms').value
        let genreby = document.getElementById('genres').value
        dispatch(filterGames({platformby, genreby}))
    }

    const tagsCheckboxes = document.querySelectorAll('input[type="checkbox"]')
    
    function handleCheck(e) {
        let tagstofilter = []
        tagsCheckboxes.forEach(checkbox => {
            if(checkbox.checked) {
                tagstofilter.push(checkbox.value)
            }
        })
        dispatch(filterGamesByTags(tagstofilter))
    }
    


    return (
        <div className='Filter-box'>
            <h4>Select a Platform:</h4>
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
            
            <div>
                <details className='DETAILS-TAGS' open>
                    <summary className='SUMMARY-TAGS'> Tags: </summary>
                    
                    {tags.map(el => el.name)?.map((tags, index) => {
                        return (
                            <label className='LABEL-TAGS' key= {index} ><br></br><input
                            key= {tags}
                            type='checkbox'
                            name='tags'
                            value={tags}
                            onClick={e => handleCheck(e)}
                            ></input>{tags}</label>
                        )
                    })}

                </details >
                <ul className='listtags'>
                {
                    Tagsinfilter.map(el => {
                        return <li className='taglist'>{el}</li>
                    })
                }
                 </ul>
                <button onClick={handleFilter}> Search Tags </button>
            </div>
        
        </div>
    )
}