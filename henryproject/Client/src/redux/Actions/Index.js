const axios = require('axios');

export function getAllGames() {
    return async function (dispatch) {
        let response = await axios('http://localhost:3001/videogames') // ver ruta de back
        dispatch({
            type: "GET_ALL_GAMES",
            payload: response.data
        })
    }
}