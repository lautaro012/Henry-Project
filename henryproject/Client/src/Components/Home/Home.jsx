import '../Home/Home.css'
import SearchBar from '../SearchBar/SearchBar'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllGames } from '../../redux/Actions/Index'


export default function Home () {

    let dispatch = useDispatch()

    let videogames = useSelector(state => state.videogames)
    

    useEffect(() => {    
        if(videogames.length === 0) {
            dispatch(getAllGames())   
            console.log('Pido los juegos a la API') 
        }
    }, [])
    

    let populars = videogames?.filter(games => games.rating > 4.5)
    console.log(videogames)

    return (
      <div className="Home">

        <SearchBar></SearchBar>
        <span><h1> VIDEOJUEGOS MAS POPULARES </h1></span>

        <div className='carruseles'>
            <Carousel 
                showArrows={true} 
                animationHandler={'fade'} 
                autoPlay={true} 
                interval={6000} 
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
                    <div>
                        <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                        <Link to='/details'><p className="legend"> 20% DISCOUNT </p></Link>
                        
                    </div>
                    <div>
                        <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg" />
                        
                        <Link to='/details'><p className="legend"> PLAY WHIT YOUR FRIENDS ! </p></Link>
                        
                    </div>
            </Carousel>
       </div>

        
        <div className='carruseles' >
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
            width={800}>
                <div className='double'>
                        <div>
                            <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                            
                        </div>
                        <div >
                            <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                            
                            
                        </div>
                        <div>
                            <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                            
                            
                        </div>
                </div>
                <div className='double'>
                        <div>
                            <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg" />
                            
                        </div>
                        <div >
                            <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg" />
                            
                            
                        </div>
                        <div>
                            <img src="https://mobidictum.biz/wp-content/uploads/2022/05/FIFA-and-EA-end-partnership-800x400.jpg " />
                            
                            
                        </div>
                </div>
                <div className='double'>
                        <div>
                            <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                            
                        </div>
                        <div >
                            <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                            
                            
                        </div>
                        <div>
                            <img src="https://magnifiedtech.com/wp-content/uploads/2021/08/How-video-games-are-coded-1.webp" />
                            
                            
                        </div>
                </div>
            </Carousel>
        </div>

    </div>
    )
}