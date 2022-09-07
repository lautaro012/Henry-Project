import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// import Cora from '../../Style/Imagenes/Corazon.png'
import { useEffect } from 'react'
import { getUser} from '../../redux/Actions/Index'

const {
  REACT_APP_API
} = process.env;

export default function ProfileNav({ setUserLogged, userLogged }) {

  //const itemsFavorites = useSelector(state => state.favorites)
  const navigate = useNavigate();
  let dispatch = useDispatch()

  let userdetails = useSelector(state => state.user)

  useEffect(() => {
    let usermail = JSON.parse(localStorage.getItem('user'))
    if (usermail.user.mail) {
      // console.log('log normal', usermail.user.mail)
      usermail = usermail.user.mail
    } else {
      // console.log('google', usermail.user.emails[0].value)
      usermail = usermail.user.emails[0].value
    }
    dispatch(getUser(usermail))
  }, [dispatch])

  // const user = JSON.parse(localStorage.getItem("user"));

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
      localStorage.clear()
      localStorage.setItem("user", JSON.stringify([]));
      localStorage.setItem("products", JSON.stringify([]));
      localStorage.setItem("favProducts", JSON.stringify([]))
      navigate("/home");

      setUserLogged(false)
    }).catch(err => {
      console.log(err)
    })

  }

  return (
    <div>
      <div className="div-image-navbar">
        <img width={45} src={userdetails.image} alt='IMAGEEN'></img>
      </div>
      <button onClick={() => navigate('/profile')}> Profile </button>
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