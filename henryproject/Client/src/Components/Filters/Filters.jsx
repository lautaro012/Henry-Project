import SearchBar from '../SearchBar/SearchBar'
import './Filters.css'
import Cards from '../Cards/Cards.jsx'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllGames } from '../../redux/Actions/Index'

export default function Filters () {

    let dispatch = useDispatch()

    let videogames = useSelector(state => state.videogames)
    

    useEffect(() => {    
        if(videogames.length === 0) {
            dispatch(getAllGames())   
            console.log('Pido los juegos a la API') 
        }
    }, [])

    function onSearch(name) {
        dispatch(getAllGames(name))
    }
     console.log(videogames)
    return (
        <div className='filters'>

            <div className="show-filters">
                <span> Filter by </span>
             
                <span> Genres </span>
           
                <span> tags </span>
            
             
            </div>


            <div className='Sorts-Games'>

                <div className='Sorts'>
                    <span> Sort </span>
                    <br></br>
                    <SearchBar
                    onSearch={onSearch}
                    ></SearchBar>
                </div>

                <div className='Games-Cards-Div'>
                    {
                        videogames.map(card => {
                            return (<Cards
                            card={card}
                            />)
                        })
                    }
                </div>

            </div>


        </div>
    )
}