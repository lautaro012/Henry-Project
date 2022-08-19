import { GET_ALL_GAMES, GET_ALL_GAMES_BY_NAME } from "../Actions/Index"

const initialState = {
    Allvideogames: [],
    videogames: [],
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                videogames: action.payload,
                Allvideogames: action.payload
            }

        case GET_ALL_GAMES_BY_NAME:
            return {
                ...state,
                videogames: action.payload,
            }

        default: return state
    }
}