const axios = require('axios');
export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_ALL_GAMES_BY_NAME = 'GET_ALL_GAMES_BY_NAME'
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID'
export const CLEAR = 'CLEAR'
export const GET_GENRES = 'GET_GENRES'
export const GET_TAGS = 'GET_TAGS'
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const FILTER_GAMES_BY_GENRES = 'FILTER_GAMES'
export const FILTER_GAMES_BY_PLATFORM = 'FILTER_GAMES_BY_PLATFORM'
export const FILTER_GAMES_BY_TAGS = 'FILTER_GAMES_BY_TAGS'
export const ORDER= 'ORDER'
export const CREATE_GAME = 'CREATE_GAME'

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
        case 'genres':
            return async function (dispatch) {
                let response = await axios(`http://localhost:3001/videogames?genres=${filter.toString()}`)
                dispatch({
                    type: FILTER_GAMES_BY_GENRES,
                    payload: response.data
                })
            }
        case 'platforms':
            return async function (dispatch) {
                                                                        // ['pc', 'playstation'] -> 'pc','playstation'
                let response = await axios(`http://localhost:3001/videogames?platforms=${filter.toString()}`)
                dispatch({
                    type: FILTER_GAMES_BY_PLATFORM,
                    payload: response.data
                })
            }
        case 'tags':
            return async function (dispatch) {
                let response = await axios(`http://localhost:3001/videogames?tags=${filter.toString()}`)
                dispatch({
                    type: FILTER_GAMES_BY_TAGS,
                    payload: response.data
                })
            }
        default:
            break;
    }
    
}

export const getGenres = function () {
    return function (dispatch) {
        fetch('http://localhost:3001/genres')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({
                type: GET_GENRES,
                payload: resp
            })
        })
    }
}
export const getPlatforms = function () {
    return function (dispatch) {
        fetch('http://localhost:3001/plataforms')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({
                type: GET_PLATFORMS,
                payload: resp
            })
        })
    }
}

export const order = function(payload) {
    return {
        type: ORDER,
        payload
    }
}

export const createvideogame = function(payload, history) {
    console.log(payload)
    return function(dispatch) {
        try {
            fetch(`http://localhost:3001/videogames`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(payload)
    
            })
            .then(response => response.json())
            .then(games => {
               
                let promises = payload.genres.map(genres => {
                    return fetch(`http://localhost:3001/videogames/${games.id}/diet/${genres}` , {    
                        method: 'POST'
                    })
                })

                Promise.all(promises).then(
                    dispatch({
                        type:CREATE_GAME,
                        payload: games
                    })
                )
                history.push("/videogame/" + games.id)
            })
            
        } catch (error) {
            console.log('error PORQUE:' + error)
        }
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