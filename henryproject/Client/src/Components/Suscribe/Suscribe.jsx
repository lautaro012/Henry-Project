import axios from 'axios'
import { useState } from 'react'
import './Suscribe.css'


export default function Suscribe () {
    
    const [input, setInput] = useState({
        mail: ''
    })
    const [loading, setLoading] = useState(false)
    function handleChange(e) {
        setInput({
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        axios.post('/newsletter', input)
        .then(resp => resp.data)
        .then(resp => {
            console.log('newsletter', resp)
            alert('Thanks for suscribing ! ')
            setLoading(false)
         })
         .catch(error => {
            setLoading(false)
            console.log('suscripcion fallida', error) 
        })
    }
    return (
        <div className='suscribe-conteiner'>
            <div className='suscribe-textarea'>
                <div className='h2-textarea'>
                    <h2> Suscribe to Games Store ! </h2>
                    <textarea> Be the first to find out about our new games and the best offers/promotions via e-mail </textarea>
                </div>
                <img width={135} src='https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png' alt='correo'></img>
            </div>
            <div className='suscribe-form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input placeholder='Email' name='mail' required onChange={(e) => handleChange(e)}></input>
                    {!loading ? <button type='submit'> Receive offers </button> : <button disabled={true} type='submit'> Receive offers </button>}
                </form>
            </div>
        </div>
    )
}