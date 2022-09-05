import { useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom"
// import Cora from '../../Style/Imagenes/Corazon.png'

const {
    REACT_APP_API
  } = process.env;

export default function ProfileNav ( {setUserLogged}) {
   
    const itemsFavorites = useSelector(state => state.favorites)
    const navigate = useNavigate();

   
    const user = JSON.parse(localStorage.getItem("user"));

    async function logOutClick() {

        fetch(`${REACT_APP_API}/auth/logout`, {
          method: "GET",
          credentials: "include",
          mode: "no-cors",
          headers: {
          Accept: "application/json", 
          "Content-Type": "application/json",
        //    "Access-Control-Allow-Credentials": true,
        //   "Access-Control-Allow-Origin": true
   
          },
        }).then(() => {
            navigate("/home/games");
            localStorage.clear()
            // localStorage.setItem("user", JSON.stringify([]));
            // localStorage.setItem("products", JSON.stringify([]));
            // localStorage.setItem("favProducts", JSON.stringify([]))
            setUserLogged(false)
        }).catch(err => {
          console.log(err)
        })

    }

    return (
        <div>
            <div className="div-image-navbar">
              <img width={45} src={user.user?.image} alt='IMAGEEN'></img>
            </div>
            <button onClick={()=> navigate('/profile')}> Profile </button>
            <button onClick={(e) => logOutClick(e)}>Logout</button> 
            {/* <div id="fav">
                <Link to='/favorites'>
                    <img src={Cora} alt="fav_item" />
                </Link>
                <h3>{itemsFavorites && itemsFavorites.length ? itemsFavorites.length : 0}</h3>
            </div> */}
        </div>
      
    )
}