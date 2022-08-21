import { 
    GET_ALL_GAMES, 
    GET_ALL_GAMES_BY_NAME, 
    GET_GAME_BY_ID, CLEAR, 
    GET_GENRES, 
    GET_PLATFORMS, 
    GET_TAGS, 
    FILTER_GAMES_BY_GENRES,
    FILTER_GAMES_BY_PLATFORM,
    FILTER_GAMES_BY_TAGS} from "../Actions/Index"

const initialState = {
    Allvideogames: [],
    videogames: [],
    game: [],
    platforms: [],
    genres: [],
    filteredVideogames: [],
    tags: [
        'Singleplayer', 
        'Steam Achievements', 
        'Multiplayer', 
        'Atmospheric', 
        'steam-trading-cards', 
        'Full controller support', 
        'Steam Cloud', 
        'Great Soundtrack', 
        'RPG', 
        'Co-op'
    ]
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
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_PLATFORMS:
            return{
                ...state,
                platforms: action.payload
            }
        // case GET_TAGS:
        //     return{
        //         ...state,
        //         tags: action.payload
        //     }
        case FILTER_GAMES_BY_GENRES:

            return{
                ...state,
                filteredVideogames: action.payload
            }
        case FILTER_GAMES_BY_TAGS:
            return{
                ...state,
                filteredVideogames: action.payload
            }
        case FILTER_GAMES_BY_PLATFORM:
            return{
                ...state,
                filteredVideogames: action.payload
            }


        default: return state
    }
}