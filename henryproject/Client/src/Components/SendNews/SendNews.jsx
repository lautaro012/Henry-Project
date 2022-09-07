import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMails } from '../../redux/Actions/Index'

const SendNews = () => {
 const dispatch= useDispatch()
  const email= useSelector(state=>state.mails)
 console.log(email)
useEffect(() => {
   dispatch(getMails());
}, [dispatch])

function onChangeEmail(){

import './SendNews.css'
import { getAllMailsNews } from '../../redux/Actions/Index'
import { useState } from 'react'


const SendNews = () => {
 const dispatch= useDispatch()
 const mailsNews= useSelector(state=>state.mailsNews)
 const [mails, setMails] = useState([])
 console.log(mails)

useEffect(() => {
   dispatch(getAllMailsNews());
}, [dispatch])

useEffect(() => {
     let mailing = document.getElementById('divToAppendMails')
     let sending = mails.join([', '])
     mailing.innerHTML=`${sending}`
}, [mails])

function onChangeEmail(ev){
  ev.preventDefault()
  if(!mails?.includes(ev.target.value) && ev.target.value !== "All") {
    setMails([...mails, ev.target.value])
  }
   
 

}
function handleSubmit(ev) {
  ev.preventDefault()
  
}


  return (
    <div>
    <h1>Ofertas para mails registrados</h1>
    <select onChange={(e)=>onChangeEmail(e)}>
    <option value="All">select emails:</option>
              {
              email?.map((e)=>{
               return(
                 <option key={e.id} value={e.email}>
                  {e.email}
                 </option>
               )
              })
              }
    </select>
    <div className='firstDivFormSendNews'>
    <h3 className='titleSendNewOffer'>Send your newsletter:</h3>
    <form onSubmit={(ev) => handleSubmit(ev)}> 
      <div className='divFormSendNews'>
      <textarea placeholder="Write and email" rows="10" cols="70"></textarea>

      <label>Emails:</label>
      <select name="mails" onChange={(ev)=>onChangeEmail(ev)} className='buttonSendNewsForm'>
      <option value="All">select user:</option>
      {mailsNews.map(ev=>{
            return(
                <option value={ev.mail} key={ev.id} > {ev.mail} </option>
            )
        })}      
      </select>
      <div className='divMailsAdded'>
        <h4>You'll send newsletter to:</h4>
        <div id='divToAppendMails'>

        </div>
      </div>
      <button type='submit' className='buttonSendNewsForm' >Send Email</button>
      </div>
    </form>
    {/* <img src={}></img> */}

    </div>
  )
}

export default SendNews