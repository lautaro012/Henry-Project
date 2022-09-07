import React from 'react'
import { useDispatch } from 'react-redux'
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
    {/* <img src={}></img> */}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum ducimus tempore blanditiis modi provident labore nam! Corrupti voluptatum perspiciatis aut officiis nihil ea quo officia, quae iste, nostrum rerum?</p>

    </div>
  )
}

export default SendNews