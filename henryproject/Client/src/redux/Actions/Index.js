const axios = require('axios');
export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_ALL_GAMES_BY_NAME = 'GET_ALL_GAMES_BY_NAME'
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID'
export const CLEAR = 'CLEAR'
export const GET_GENRES = 'GET_GENRES'
export const GET_TAGS = 'GET_TAGS'
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const GET_GAMES_BY_GENRE = 'GET_GAMES_BY_GENRE'
export const FILTER_GAMES_BY_PLATFORM = 'FILTER_GAMES_BY_PLATFORM'
export const FILTER_GAMES_BY_TAGS = 'FILTER_GAMES_BY_TAGS'
export const ORDER = 'ORDER'
export const CREATE_GAME = 'CREATE_GAME'
export const FILTER_GAMES = 'FILTER_GAMES'
export const EMPTY_GAME_STATE = 'EMPTY_GAME_STATE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FOR_CART = 'DELETE_FOR_CART'
export const DELETE_FOR_FAVS = "DELETE_FOR_FAVS"
export const ADD_TO_FAV = "ADD_TO_FAV"
export const ACTUALIZAR_CART = "ACTUALIZAR_CART"
export const ACTUALIZAR_FAV = "ACTUALIZAR_FAV"
export const POST_VIDEOGAME= "POST_VIDEOGAME"
export const SHOW_VIDEOGAME= "SHOW_VIDEOGAME"
export const HIDE_VIDEOGAME= "HIDE_VIDEOGAME"
export const CHANGE_NAME= "CHANGE_NAME"
export const GET_USER = 'GET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const GET_REVIEWS_GAME = "GET_REVIEWS_GAME"

require('dotenv').config();
const {
    REACT_APP_API
} = process.env;



export function getAllGames(name) {

    if (name) {
        return async function (dispatch) {
            try {
                let response = await axios(`/videogames?name=${name}`)
                dispatch({
                    type: GET_ALL_GAMES_BY_NAME,
                    payload: response.data
                })
            } catch (error) {
                alert('no games whit that name :(')
                dispatch({
                    type: CLEAR,                  
                })
            }
        }
    } else {
        return async function (dispatch) {
            let response = await axios(`/videogames`)
            dispatch({
                type: GET_ALL_GAMES,
                payload: response.data
            })
        }
    }
}



export function getGameById(id) {
    return async function (dispatch) {
        let response = await axios(`/videogames/${id}`)
        dispatch({
            type: GET_GAME_BY_ID,
            payload: response.data
        })
    }
}


export function hideVideoGame(id){
    return async function(dispatch){
        let resp = await axios.put(`/disabled/${id}`)
        dispatch({type:HIDE_VIDEOGAME, payload: resp.data})
    }
}

export function showVideoGame(id) {
    return async function (dispatch) {
        let resp = await axios.put(`/abled/${id}`)
        dispatch({type: SHOW_VIDEOGAME, payload: resp.data})
    }
}

export const clear = function () {
    return {
        type: CLEAR
    }
}

export const filterGames = function (payload) {

    return {
        type: FILTER_GAMES,
        payload
    }

}

export const getGenres = function () {
    return function (dispatch) {
        axios.get('/genres')
            .then(resp => resp.data)
            .then(resp => {
                dispatch({
                    type: GET_GENRES,
                    payload: resp
                })
            })
            .catch(err => console.log(err))

        // fetch(`${REACT_APP_API}/genres`)
        // .then(resp => resp.json())
        // .then(resp => {
        //     dispatch({
        //         type: GET_GENRES,
        //         payload: resp
        //     })
        // })
    }
}
export const getPlatforms = function () {
    return function (dispatch) {
        axios.get('/plataforms')
            .then(resp => resp.data)
            .then(resp => {
                dispatch({
                    type: GET_PLATFORMS,
                    payload: resp
                })
            })

        // fetch(`${REACT_APP_API}/plataforms`)
        // .then(resp => resp.json())
        // .then(resp => {
        //     dispatch({
        //         type: GET_PLATFORMS,
        //         payload: resp
        //     })
        // })
    }
}

export const order = function (payload) {
    return {
        type: ORDER,
        payload
    }
}

export function postNewUser(user) {
    return async function () {
        try {
            await axios.post(`/newUser`, user)
            console.log(user)
        } catch (err) {
            console.log(err)
        }
    }
}

export const Getbygenre = function (genre) {
    return function (dispatch) {
        axios.get(`/videogames?genres=${genre}`)
            .then(resp => resp.data)
            .then(resp => {
                dispatch({
                    type: GET_GAMES_BY_GENRE,
                    payload: resp
                })
            })
            .catch(err => console.log(err))

        // fetch(`${REACT_APP_API}/videogames?genres=${genre}`)
        // .then(resp => resp.json())
        // .then(resp => {
        //     dispatch({
        //         type: GET_GAMES_BY_GENRE,
        //         payload: resp
        //     })
        // })
    }
}
export const filterGamesByTags = function (payload) {
    return {
        type: FILTER_GAMES_BY_TAGS,
        payload
    }
}

export function vaciarGame() {
    return {
        type: EMPTY_GAME_STATE,
    }
}

export function postVideoGame(payload){
    return async function(dispatch){
        await axios.post("/videogames",payload)
       return dispatch({type: POST_VIDEOGAME, payload})
     }
}


export function changeName(payload){
    return async function(dispatch){
        await axios.get("/changename/:gameId?",payload)
        return dispatch({type:CHANGE_NAME,payload})
    }
}


export const getTags = function () {
    return function (dispatch) {
        axios.get('/tags')
            .then(resp => resp.data)
            .then(resp => {
                dispatch({
                    type: GET_TAGS,
                    payload: resp
                })
            })
            .catch(err => console.log(err))

        // fetch(`${REACT_APP_API}/tags`)
        // .then(resp => resp.json())
        // .then(resp => {
        //     dispatch({
        //         type: GET_TAGS,
        //         payload: resp,
        //     })
        // })
    }
}

export function actualizarCart(game) {
    return {
        type: ACTUALIZAR_CART,
        payload: game
    }
}

export function addToCart(game) {
    return {
        type: ADD_TO_CART,
        payload: game
    }
}

export function deleteItemFromCart(id) {
    return {
        type: DELETE_FOR_CART,
        payload: id
    }
}

export function actualizarFav(game) {
    return {
        type: ACTUALIZAR_FAV,
        payload: game
    }
}

export function addToFav(game) {
    return {
        type: ADD_TO_FAV,
        payload: game
    }
}

export function deleteItemFromFavs(id) {
    return {
        type: DELETE_FOR_FAVS,
        payload: id,
    }
}

export function signin(payload) {
    return function () {
        axios.post(`/login`, payload)
            .then(resp => resp.data)
            .then(resp => {
                localStorage.setItem('user', JSON.stringify(resp))
                window.location.reload()
            })
            .catch(err => console.log(payload))
    }
}

export function getUser (payload) {
    return function (dispatch) {
        axios.get(`/userLogged/${payload}`)
        .then(resp => resp.data)
        .then(resp => {
            dispatch({
                type: GET_USER,
                payload: resp
            })
        })
        .catch(err => console.log(payload))
    }
}
export function clearUser() {
    return function (dispatch) {
        dispatch({
            type: CLEAR_USER
        })
    }
}

export function getReviews(gameId){
    return async function(dispatch){
        let response = await axios.get(`/reviews/${gameId}`)
        return dispatch({
            type: GET_REVIEWS_GAME,
            payload: response.data
        })
    }
}