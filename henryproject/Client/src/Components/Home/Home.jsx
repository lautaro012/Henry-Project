import '../Home/Home.css'
import NAV_BAR from '../Nav_bar/Nav_bar'
import SearchBar from '../SearchBar/SearchBar'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home () {

    return (
      <div className="Home">

        <NAV_BAR/>

        <SearchBar></SearchBar>
        
        <Carousel showArrows={true} className='Carousel' autoPlay={true} interval={1000}>
                <div>
                    <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/12/minecraft.jpg?fit=2048%2C1350&quality=50&strip=all&ssl=1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/videojuegos-ma%CC%81s-exitosos.jpg?fit=1280%2C720&quality=80&ssl=1" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src='https://www.eluniverso.com/resizer/JmanqxXU51w1Bsa0X0Nd9iz1cSM=/660x371/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZYX6AFU7OBH7PBXUTCXQEICJ7E.jpg' />
                    
                    <button className='legend'>  MINECRAFT.  BUY NOW !! </button>
                </div>
        </Carousel>

        {/* <div className="home-primary-videogames">
          <button>left</button>
          <div className='home-card'>

            <div className='home-img-primary'>
             <span  > Ya Disponible !</span>
             <button> COMPRAR </button>
            </div>

            <div className="home-show-img-secundary">
              <span> Titulo </span>
              <img src='https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/videojuegos-ma%CC%81s-exitosos.jpg?fit=1280%2C720&quality=80&ssl=1' 
              alt='imagen secundaria'
              className="home-img-secundary"
              ></img>
              <img src='https://www.eluniverso.com/resizer/JmanqxXU51w1Bsa0X0Nd9iz1cSM=/660x371/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZYX6AFU7OBH7PBXUTCXQEICJ7E.jpg' 
              alt='imagen secundaria'
              className="home-img-secundary"
              ></img>
              (resumen, generos, plataforma, tag etc)
              <button> Learn more... </button>
            </div>
          </div> 
          <button> right</button>
        </div>

        <div className="home-primary-videogames">
          <button>left</button>
          <div className='home-card'>

            <div className='home-img-primary'>
             <span  > Ya Disponible !</span>
             <button> COMPRAR </button>
            </div>

            <div className="home-show-img-secundary">
              <span> Titulo </span>
              <img src='https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/videojuegos-ma%CC%81s-exitosos.jpg?fit=1280%2C720&quality=80&ssl=1' 
              alt='imagen secundaria'
              className="home-img-secundary"
              ></img>
              <img src='https://www.eluniverso.com/resizer/JmanqxXU51w1Bsa0X0Nd9iz1cSM=/660x371/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZYX6AFU7OBH7PBXUTCXQEICJ7E.jpg' 
              alt='imagen secundaria'
              className="home-img-secundary"
              ></img>
              (resumen, generos, plataforma, tag etc)
              <button> Learn more... </button>
            </div>
          </div> 
          <button> right</button>
        </div> */}

    </div>
    )
}