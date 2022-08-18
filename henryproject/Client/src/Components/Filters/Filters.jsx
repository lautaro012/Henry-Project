import './Filters.css'

export default function Filters () {


    return (
        <div className='filters'>
            <div className="show-filters">
                <span> Filter by </span>
                <br></br>
                <br></br>
                <span> Genres </span>
                <br></br>
                <br></br>
                <span> tags </span>
                <br></br>
                <br></br>
            </div>
            <div className='Sorts-Games'>
                <div className='Sorts'>
                    <span> Sort </span>
                    <br></br>
                    
                </div>
                <div className='Games-Cards-Div'>
                    <div>
                        CARDS
                    </div>
                </div>
            </div>
        </div>
    )
}