const axios = require('axios');
export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_ALL_GAMES_BY_NAME = 'GET_ALL_GAMES_BY_NAME'
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID'
export const CLEAR = 'CLEAR'
export const GET_GENRES = 'GET_GENRES'
export const GET_TAGS = 'GET_TAGS'
export const GET_PLATFORMS = 'GET_PLATFORMS'

export function getAllGames(name) {

    if(name) {
        return async function (dispatch) {
            let response = await axios(`http://localhost:3001/videogames?name=${name}`)
            dispatch({
                type: GET_ALL_GAMES_BY_NAME,
                payload: response.data
            })
        }
    } else {
        return async function (dispatch) {
            let response = await axios('http://localhost:3001/videogames') 
            dispatch({
                
                type: GET_ALL_GAMES,
                payload: response.data
            })
        }
    }
}

export function getGameById(id) {
    return async function (dispatch) {
        let response = await axios(`http://localhost:3001/videogames/${id}`)
        dispatch({
            type: GET_GAME_BY_ID,
            payload: response.data
        })
    }
}

export const clear = function() {
    return {
        type: CLEAR
    }
}

export const filterGames = function(filter, filterby) {

    switch (filterby) {
        case 'genre':

            
        case 'platform':
        

        case 'tag':
    

        default:
            
    }
    
}

export const getGenres = function () {
    return function (dispatch) {
        fetch('http://localhost:3001/genres')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({
                type: GET_GENRES,
                payload: resp,
            })
        })
    }
}
export const getPlatforms = function () {
    return function (dispatch) {
        fetch('http://localhost:3001/platforms')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({
                type: GET_PLATFORMS,
                payload: resp,
            })
        })
    }
}
// export const getTags = function () {
//     return function (dispatch) {
//         fetch('http://localhost:3001/tags')
//         .then(resp => resp.json())
//         .then(resp => {
//             dispatch({
//                 type: GET_TAGS,
//                 payload: resp,
//             })
//         })
//     }
// }