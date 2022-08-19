const axios = require('axios');
export const GET_ALL_GAMES = 'GET_ALL_GAMES'

export function getAllGames() {
    return async function (dispatch) {
        let response = await axios('http://localhost:3001/videogames') 
        dispatch({
            
            type: GET_ALL_GAMES,
            payload: response.data
        })
    }
}