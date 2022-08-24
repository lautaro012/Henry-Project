import '../Home/Home.css'
import SearchBar from '../SearchBar/SearchBar'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate  } from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllGames, Getbygenre, vaciarGame } from '../../redux/Actions/Index'



export default function Home () {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    let Allvideogames = useSelector(state => state.Allvideogames)
    let videogames = useSelector(state => state.videogames)
    let videogamesBygenre = useSelector(state => state.videogamesBygenre)

    useEffect(() => {    

        dispatch(getAllGames())   
        dispatch(Getbygenre('Indie'))
        dispatch(vaciarGame()) // para vaciar estado global del juegodetail
    }, [dispatch, Allvideogames.length])
    
    const onSearch = (name) => {
        navigate("../home/games", { replace: true });
        dispatch(getAllGames(name))
    }

    let populars = Allvideogames?.filter(games => games.rating > 4.5)
    const mostpopular = videogames[0]
  

    return (
    <div className="Home">

        <SearchBar
        onSearch={onSearch}
        ></SearchBar>
        <div className='Home-Games'>

            <div className='carruseles'>
                <Carousel 
                    showArrows={true} 
                    animationHandler={'fade'} 
                    autoPlay={true} 
                    interval={5000} 
                    infiniteLoop={true} 
                    stopOnHover={true} 
                    showThumbs={false}
                    width={1200}>
                    {
                        populars.map((game) => {
                            return (
                                            <div key={game.id}>
                                                    <p className="legend"> {game.price} {game.name} </p>
                                                    <img className='img-populars' src={game.image} alt='img'></img>
                                                    
                                            </div>
                            )
                        })
                    }
                </Carousel>
            </div >
        
            <div className='carruseles'>
                <h1 className='h'> Most Popular:</h1>
                <Carousel 
                    showArrows={true} 
                    emulateTouch={true}
                    swipeable={true} 
                    autoPlay={true} 
                    interval={6000} 
                    infiniteLoop={true} 
                    stopOnHover={true} 
                    showThumbs={false}
                    width={800}>
                        {
                            mostpopular?.screenshots?.map(img => {
                                return (
                                    <div>
                                        <img src={img} alt='img'></img>
                                        <Link to={`/home/games/${mostpopular.id}`} className='Link'><p className="legend"> {mostpopular.name} CLICK FOR DETAILS !</p> </Link>
                                    </div>
                                )
                            })
                        }
                </Carousel>
             </div>

           
            <div className='carruseles' >
                <h1 className='h'> OUR INDIE SECTION ! </h1>
                <Carousel 
                showArrows={true} 
                emulateTouch={true}
                swipeable={true} 
                autoPlay={true} 
                interval={3000} 
                infiniteLoop={true} 
                stopOnHover={true}
                centerMode={true}
                showThumbs={false}
                width={1000}>
                   {
                    videogamesBygenre?.map(games => {
                        return (
                                <Link to={`/home/games/${games.id}`} className='Link'>
                                    <h4 className='h'> {games.name}</h4>
                                    <div className='carrusel-triple'>
                                        <div>
                                            <img width={200} height={200} src={games.image} alt='img'></img>                               
                                        </div>
                                        <div>
                                              <img width={200} height={200} src={games.screenshots[1]} alt='img'></img>
                                        </div>
                                        <div>
                                             <img width={200} height={200} src={games.screenshots[2]} alt='img'></img>
                                        </div>
                                       
                                    </div>
                                </Link>
                        )})           
                   }
                </Carousel>
            </div>

        </div>
    </div>
    )
}