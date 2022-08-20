import { GET_ALL_GAMES, GET_ALL_GAMES_BY_NAME, GET_GAME_BY_ID, CLEAR } from "../Actions/Index"

const initialState = {
    Allvideogames: [],
    videogames: [],
    game: [],
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
        case GET_GAME_BY_ID:
            return {
                ...state,
                game: action.payload,
            }
        case CLEAR:
            return {
                ...state,
                videogames: state.Allvideogames
            }

        default: return state
    }
}