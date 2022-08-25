import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/Landing_Page/LandingPage.jsx'
import About from './Components/About_Us/About.jsx'
import Home from './Components/Home/Home.jsx'
import Games from './Components/Games/Games';
import NavBar from './Components/Nav_bar/Nav_bar';
import GameDetail from './Components/Game_Details/GameDetails.jsx'
import CreateVideogame from './Components/CreateVideogame/CreateVideogame';
import Admin from './Components/Admin/Admin';
import { Profile } from './Components/Profile/Profile';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Cart from './Components/Cart/Cart.jsx';
import EditVideogame from './Components/CreateVideogame/EditVideogame/EditVideogame';
import { useEffect, useState } from 'react';
import Register from './Components/Register/Register';



function App() {
  const [user, setUser] = useState(null)
   
  useEffect(() =>  {
   const getUser = async () => {
     fetch("http://localhost:3001/auth/success", {
       method: "GET",
       credentials: "include",
       headers: {
       Accept: "application/json", 
       "Content-Type": "application/json",
      //  "Access-Control-Allow-Credentials": true

       },
     }).then((response) => {
       if(response.status === 200) return response.json();
       throw new Error('authentication has been failed')
     }).then(resObject => {
       setUser(resObject.user)
     }).catch(err => {
       console.log(err)
     })
   }
     getUser()

  }, [])

  console.log(user)
  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/about' element={<About/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/games' element={<Games/>}/>
        <Route path='/home/games/:id' element={<GameDetail />} />
        <Route path='/home/create' element={<CreateVideogame/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/Loading' element={<LoadingScreen/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/edit' element={<EditVideogame></EditVideogame>}/>
        <Route path='/register' element={<Register></Register>}/>

      </Routes>
    </Router>
  );
}

export default App;
