import '../Home/Home.css'
//import SearchBar from '../SearchBar/SearchBar'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate  } from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { getAllGames, Getbygenre, vaciarGame } from '../../redux/Actions/Index'
import Card from '../Cards/Cards';



export default function Home () {

    const dispatch = useDispatch()
   // const navigate = useNavigate()
    
    let Allvideogames = useSelector(state => state.Allvideogames)
    let videogames = useSelector(state => state.videogames)
    let videogamesBygenre = useSelector(state => state.videogamesBygenre)

    useEffect(() => {
        if(Allvideogames.length === 0) {
            dispatch(Getbygenre('Indie'))
            dispatch(getAllGames())   
        }
        dispatch(vaciarGame()) // para vaciar estado global del juegodetail
    }, [])
    

    let populars = Allvideogames?.filter(games => games.rating > 4.5).slice(0,5)
    const GameofTheWeek = videogames[0]   

    const cheaps = Allvideogames.sort((a, b) => {
                        if (a.price > b.price) {
                            return 1
                        }
                        if (a.price < b.price) {
                            return -1
                        }
                        return 0
                    }).slice(0,5)

    const news = Allvideogames.sort((a, b) => {
                    if (a.realeaseDate < b.realeaseDate) {
                        return 1
                    }
                    if (a.realeaseDate > b.realeaseDate) {
                        return -1
                    }
                    return 0
                }).slice(0,20)
   

    return (
    <div className="Home">
        {
            Allvideogames[0] ?

            <div className='Home-Games'>

                <div className='carruseles'>
                    <h1 className='h'> Most Popular:</h1>
                    <Carousel 
                        showArrows={true} 
                        autoPlay={true} 
                        interval={5000} 
                        infiniteLoop={true} 
                        stopOnHover={true} 
                        showThumbs={false}
                        width={1500}>
                            {
                                GameofTheWeek?.screenshots?.map(img => {
                                    return (
                                        <div>
                                            <img src={img} alt='img'></img>
                                            <Link to={`/home/games/${GameofTheWeek.id}`} className='Link'><p className="legend"> {GameofTheWeek.name} CLICK FOR DETAILS !</p> </Link>
                                        </div>
                                    )
                                })
                            }
                    </Carousel>
                </div>

                <hr></hr>


                <div className='carruseles'>
                    <h1 className='h'> New Releases : </h1>
                    <Carousel 
                        showArrows={true} 
                        autoPlay={true} 
                        interval={5000} 
                        infiniteLoop={true} 
                        stopOnHover={true} 
                        showThumbs={false}
                        width={1600}
                        >
                        {
                            <div className='carrusel-triple'>
                                {
                                news.slice(0,5).map((game) => {
                                    return (
                                            <Card
                                            card={game}
                                            />
                                    )
                                })
                                }
                            </div>
                        }
                        {
                            <div className='carrusel-triple'>
                                {
                            news.slice(5,10).map((game) => {
                                return (
                                    <Card
                                    card={game}
                                    />
                                )
                            })
                                }
                            </div>
                        }
                        {
                            <div className='carrusel-triple'>
                                {   
                            news.slice(10,15).map((game) => {
                                return (
                                    <Card
                                    card={game}
                                    />
                                )
                                }) 
                            }
                            </div>
                        }       
                        {
                            <div className='carrusel-triple'>
                                {
                                    news.slice(15,20).map((game) => {
                                     return (
                                        <Card
                                        card={game}
                                        />
                                     )
                                      })  

                                }
                            </div>
                        }

                    </Carousel>
                </div >

                <hr></hr>
w

                    <div className='carruseles'>
                    <Carousel 
                        showArrows={true} 
                        animationHandler={'fade'} 
                        autoPlay={true} 
                        interval={5000} 
                        infiniteLoop={true} 
                        stopOnHover={true} 
                        showThumbs={false}
                        width={800}>
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
                    <hr></hr>
                <div className='carruseles' >
                    <h1 className='h'> DISCOUNTS OF THE WEEK ! </h1>
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
                        cheaps?.map(games => {
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
            

                <hr></hr>
            
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
            :
            <LoadingScreen></LoadingScreen>
        }
    </div>
    )
}