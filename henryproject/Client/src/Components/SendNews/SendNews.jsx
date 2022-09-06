import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './SendNews.css'
import { getAllMailsNews } from '../../redux/Actions/Index'


const SendNews = () => {
 const dispatch= useDispatch()
 const mailsNews= useSelector(state=>state.mailsNews)
  console.log(mailsNews.map(e => e.mail))

useEffect(() => {
   dispatch(getAllMailsNews());
}, [dispatch])

function onChangeEmail(){
 
}
  return (
    <div className='firstDivFormSendNews'>
    <h3 className='titleSendNewOffer'>Send your newsletter:</h3>
    <form>
      <div className='divFormSendNews'>
      <textarea placeholder="Write and email" rows="10" cols="70"></textarea>

      <label>Emails:</label>
      <select onChange={(e)=>onChangeEmail(e)} className='buttonSendNewsForm'>
      <option value="All">select user:</option>
      {mailsNews.map(ev=>{
            return(
                <option value={ev.mail} key={ev.id} > {ev.mail} </option>
            )
        })}      </select>
      <button type='submit' className='buttonSendNewsForm' >Send Email</button>
      </div>
    </form>
    {/* <img src={}></img> */}

    </div>
  )
}

export default SendNews