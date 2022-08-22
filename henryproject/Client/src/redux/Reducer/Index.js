import { 
    GET_ALL_GAMES, 
    GET_ALL_GAMES_BY_NAME, 
    GET_GAME_BY_ID, CLEAR, 
    GET_GENRES, 
    ORDER,
    GET_PLATFORMS, 
    GET_TAGS, 
    CREATE_GAME,
    FILTER_GAMES_BY_GENRES,
    FILTER_GAMES_BY_PLATFORM,
    FILTER_GAMES_BY_TAGS,
    FILTER_GAMES} from "../Actions/Index"

const initialState = {
    Allvideogames: [],
    videogames: [],
    videogamesByFilter: [],
    game: [],
    platforms: [],
    genres: [],
    genrefilter: 'all',
    platformfilter: 'all',
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
                Allvideogames: action.payload,
                videogamesToFilter: action.payload
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
        // case FILTER_GAMES_BY_GENRES:
        //     return{
        //         ...state,
        //         videogamesByFilter: action.payload
        //     }
        // case FILTER_GAMES_BY_PLATFORM:
        //     let videogamesfromfilter = action.payload
        //     let allgames = state.videogamesByFilter

        //     let currentvideogames = allgames.filter(value => videogamesfromfilter.includes(value))
        //     return{
        //         ...state,
        //         videogames: currentvideogames
        //     }
        // case FILTER_GAMES_BY_TAGS:
        //     return{
        //         ...state,
        //         filteredVideogames: action.payload
        //     }
            case ORDER:
                const orderType = action.payload.orderType
                const orderBy = action.payload.orderBy
                const sortedVideogames = orderType === 'asc' ?
                        state.videogames.sort((a, b) => {
                            if(a[orderBy] > b[orderBy]) {
                                return 1
                            }
                            if(a[orderBy] < b[orderBy]) {
                                return -1
                            }
                            return 0
                        }):
                        state.videogames.sort((a, b) => {
                            if(a[orderBy] < b[orderBy]) {
                                return 1
                            }
                            if(a[orderBy] > b[orderBy]) {
                                return -1
                            }
                            return 0
                        })
                        
                        return {
                            ...state,
                            videogames: sortedVideogames
                        }

            case CREATE_GAME:
                return{
                    ...state,
                    videogames: [...state.videogames, action.payload],
                }

            case FILTER_GAMES:
                let { platformby, genreby } = action.payload

                let Allvideogames = state.Allvideogames
                const games1 = platformby === 'all' ? Allvideogames : Allvideogames.filter(game => game.platforms.find(platforms => platforms === platformby ))
                const games2 = genreby === 'all' ? Allvideogames : Allvideogames.filter(game => game.genres.find(genre => genre === genreby ))
                const total = games1.filter(element => games2.includes(element));
                return {
                    ...state,
                    videogames: total,
                    genrefilter: genreby,
                    platformfilter: platformby
                }

        default: return state
    }
}