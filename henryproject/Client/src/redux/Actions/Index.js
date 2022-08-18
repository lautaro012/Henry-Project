const axios = require('axios');

export function getAllGames() {
    return async function (dispatch) {
        let response = await axios('/games') // ver ruta de back
        dispatch({
            type: "GET_ALL_GAMES",
            payload: response.data
        })
    }
}