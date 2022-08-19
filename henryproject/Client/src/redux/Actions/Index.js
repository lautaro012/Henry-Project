const axios = require('axios');
export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_ALL_GAMES_BY_NAME = 'GET_ALL_GAMES_BY_NAME'
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
            type: 'GET_GAME_BY_ID',
            payload: response.data
        })
    }
}
