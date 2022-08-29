import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import Cora from '../../Style/Imagenes/Corazon.png'


export default function ProfileNav ( {setUserLogged, userLogged}) {
   
    const itemsFavorites = useSelector(state => state.favorites)
   
    async function logOutClick() {

        fetch("http://localhost:3001/auth/logout", {
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
            localStorage.removeItem('user')
            setUserLogged(false)
        }).catch(err => {
          console.log(err)
        })

    }

    return (
        <div>
            <Link to="/profile"><button>Profile</button></Link>
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