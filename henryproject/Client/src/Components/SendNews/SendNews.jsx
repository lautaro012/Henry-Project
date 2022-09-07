import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './SendNews.css'
import { getAllMailsNews } from '../../redux/Actions/Index'
import { useState } from 'react'


const SendNews = () => {
 const dispatch= useDispatch()
 const mailsNews= useSelector(state=>state.mailsNews)
 const [mails, setMails] = useState([])
 console.log('aaaaaaaaaaaaaaaaaaa',mailsNews)

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

export default  SendNews