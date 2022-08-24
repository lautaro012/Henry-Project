import SearchBar from '../SearchBar/SearchBar'
import './Games.css'
import Cards from '../Cards/Cards.jsx'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, clear, getGenres, getPlatforms, order, vaciarGame, getTags } from '../../redux/Actions/Index'
import { useState } from 'react';
import Paginado from '../Paginado/Paginado';
import Filter from '../Filter/Filter';




export default function Games() {

    let dispatch = useDispatch()

    let videogames = useSelector(state => state.videogames)
    let tags = useSelector(state => state.tags)
    let genres = useSelector(state => state.genres)
    let platforms = useSelector(state => state.platforms)
    const [render, setRender] = useState('')


    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPlatforms())
        dispatch(vaciarGame()) // para vaciar estado global del juegodetail
        dispatch(getTags())
        if (videogames.length === 0) {
            dispatch(getAllGames())
        }
        return function cleaning() {
            dispatch(clear())
        }
    }, [])

    function onSearch(name) {
        dispatch(getAllGames(name))
        setRender([...render, 'hola'])
    }

    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const videogamesPerPage = 10

    //videojuegos filtradas por pagina
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogame = videogames.slice(indexOfFirstVideogame, indexOfLastVideogame)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function handleSort(e) {
        e.preventDefault();
        let orderBy = document.getElementById('orderBy').value
        let orderType = document.getElementById('orderType').value
        dispatch(order({ orderBy: orderBy, orderType: orderType }));
        setCurrentPage(1);
        setRender(`${render} renderizado`);
    }

    console.log(currentVideogame)

    return (
        <div className='Search-Filters'>

            <SearchBar
                onSearch={onSearch}
            ></SearchBar>

            <div className='filters'>
                <div className="show-filters">

                    <Filter
                        genres={genres}
                        platforms={platforms}
                        tags={tags}
                        setRender={el => setRender(el + render)}
                    />

                </div>
                <div className='Sorts-Games'>
                    <div className='Sorts'>
                        <h4 color='#ffffff'> Name/Rate </h4>
                        <select className='SELECT-ORDER' id='orderBy' onChange={(e) => handleSort(e)} defaultValue='orderBy'>
                            <option value='name'> Name </option>
                            <option value='rating'> Rate </option>
                        </select>
                        <h4>In What Order ?</h4>
                        <select className='SELECT-ORDER' id='orderType' onChange={(e) => handleSort(e)} defaultValue='orderType'>
                            <option value='asc'> Ascendent </option>
                            <option value='des'> Descendent </option>
                        </select>

                    </div>

                    <div className='PAGINADO'>
                        <Paginado
                            VideogamesPerPage={videogamesPerPage}
                            allVideogames={videogames.length}
                            paginado={paginado}
                            actual={currentPage}
                        />
                    </div>
                    <div className='Games-Cards-Div'>
                        {
                            currentVideogame.length > 0 ?

                                currentVideogame?.map(card => {
                                    return (<Cards
                                        card={card}
                                        key={card.id}
                                    />)
                                })
                                :
                                <h1 className='h'> NO GAMES THAT MATCH YOUR REQUISITES </h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}