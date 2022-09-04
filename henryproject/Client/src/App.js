import './App.css';
import { useDispatch } from 'react-redux';
import { actualizarCart, actualizarFav } from './redux/Actions/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { addToCart } from './redux/Actions/Index';
import axios from 'axios'
import LandingPage from './Components/Landing_Page/LandingPage.jsx'
import About from './Components/About_Us/About.jsx'
import Home from './Components/Home/Home.jsx'
import Games from './Components/Games/Games';
import NavBar from './Components/Nav_bar/Nav_bar';
import GameDetail from './Components/Game_Details/GameDetails.jsx'
import CreateVideogame from './Components/CreateVideogame/CreateVideogames.jsx';
import Admin from './Components/Admin/Admin';
import { Profile } from './Components/Profile/Profile';
import UserSign from './Components/UserSign/UserSign';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Cart from './Components/Cart/Cart.jsx';
import Footer from './Components/Footer/Footer.jsx'
import Favoritos from './Components/Favoritos/Favoritos.jsx'
import EditVideogame from './Components/CreateVideogame/EditVideogame/EditVideogame';
import { useEffect, useState } from 'react';
import Register from './Components/Register/Register';
import { FormularioPago } from './Components/FormularioPago/FormularioPago';

import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js"
const stripePromise=loadStripe("pk_test_51Lde2sJXnqrwcfODw8cWGGVzyavpCNgaUXMhWTAbkGIJ3txhY9PVGuUzy9QPzQ5riddbQZdRADa3QTHxqhrSeSZq00dWuMhBM2")

require('dotenv').config();
const {
  REACT_APP_API
} = process.env;


function App() {
  let dispatch = useDispatch()

  const [user, setUser] = useState(null)
  
  const [userLogged, setUserLogged] = useState(false)
  console.log(`Variable de entorno es ${REACT_APP_API}`)
  

  // useEffect(() => {

  //    const getUser = async () => {
  //      fetch(`http://localhost:3001/auth/success`, {
  //        method: "GET",
  //       //  credentials: "include",
  //        headers: {
  //          Accept: "application/json",
  //          "Content-Type": "application/json",
  //            "Access-Control-Allow-Credentials": true
  //        },
  //      }).then((response) => {

  //        if(response.status === 200) {
  //           console.log('entra a response')
  //          return response.json()};

  //        throw new Error('authentication has been failed')
  //      }).then(resObject => {
  //        setUserLogged(true)
  //        localStorage.setItem('user', JSON.stringify(resObject))
  //        setUser(resObject.user)
  //      }).catch(err => {
  //        console.log(err)
  //      })
  //    }
  //    getUser()

  // }, [])



  console.log(`USUARIO: ${user}`)



  useEffect(() => {
    if(localStorage.getItem('user')) {
      setUserLogged(true)}

    if (localStorage.length === 0) {
      localStorage.setItem("products", JSON.stringify([]));
      localStorage.setItem("favProducts", JSON.stringify([]));
    }
  }, [userLogged]);

  const videogamesLS = JSON.parse(localStorage.getItem("products"));

  useEffect(() => {
    dispatch(actualizarCart(videogamesLS));
  }, [dispatch, videogamesLS]);

  const favoritesLS = JSON.parse(localStorage.getItem("favProducts"));

  useEffect(() => {
    dispatch(actualizarFav(favoritesLS));
  }, [dispatch, favoritesLS]);

  //asdfsdf

  return (
    <Router>

      <NavBar userLogged={userLogged} setUserLogged={setUserLogged} />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/games' element={<Games />} />
        <Route path='/home/games/:id' element={<GameDetail />} />
        <Route path='/favorites' element={<Favoritos />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin/editgame/:id' element={<EditVideogame></EditVideogame>} />
        <Route path='/admin/createvideogame' element={<CreateVideogame/>} />
        <Route path='/profile' element={ userLogged ? <Profile setUserLogged={setUserLogged}/> : <UserSign setUserLogged={setUserLogged} isOpen={true}/>} />
        <Route path='/Loading' element={<LoadingScreen/>} />
        <Route path='/cart' element={<Cart/>} />
        {/* <Route path='/test' element={<UserRegister/>} /> */}
        <Route path='/cart/formularioPago' element={userLogged ? <Elements stripe={stripePromise}><FormularioPago></FormularioPago></Elements> : <UserSign setUserLogged={setUserLogged} isOpen={true}/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
