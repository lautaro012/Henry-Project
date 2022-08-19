import SearchBar from '../SearchBar/SearchBar'
import './Filters.css'

export default function Filters () {


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
                    <SearchBar></SearchBar>
                </div>

                <div className='Games-Cards-Div'>
                    <div>
                        cards.map
                    </div>
                </div>

            </div>


        </div>
    )
}