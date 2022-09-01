import { NavItem } from "reactstrap"
import {
    GET_ALL_GAMES,
    GET_ALL_GAMES_BY_NAME,
    GET_GAME_BY_ID, CLEAR,
    GET_GENRES,
    ORDER,
    GET_PLATFORMS,
    GET_TAGS,
    GET_GAMES_BY_GENRE,
    CREATE_GAME,
    FILTER_GAMES_BY_TAGS,
    FILTER_GAMES,
    EMPTY_GAME_STATE,
    ADD_TO_CART,
    DELETE_FOR_CART,
    DELETE_FOR_FAVS,
    ADD_TO_FAV,
    ACTUALIZAR_CART,
    ACTUALIZAR_FAV,
    POST_VIDEOGAME,

    CHANGE_NAME,
    HIDE_VIDEOGAME,
    
    

    GET_USER,
    CLEAR_USER,
    hideVideoGame,

} from "../Actions/Index"

const initialState = {
    Allvideogames: [],
    videogames: [],
    videogamesBygenre: [],
    game: [],
    platforms: [],
    genres: [],
    genreby: 'all',
    platformby: 'all',
    tagsFilter: [],
    cart: [],
    favorites: [],
    tags: [],
    Tagsinfilter: [],
    user: [],
    hidenVideoGame:[]
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                videogames: action.payload,
                Allvideogames: action.payload,
                tagsFilter: action.payload
            }

        case GET_ALL_GAMES_BY_NAME:
            return {
                ...state,
                videogames: action.payload,
            }

            
        case ACTUALIZAR_CART:
            return {
                ...state,
                cart: action.payload,
            }
        case ADD_TO_CART:
            let itemFound = state.cart.map(games => games.id).includes(action.payload.id)
            if (!itemFound) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
            else {
                return {
                    ...state
                }
            }
        case DELETE_FOR_CART:
            if (action.payload === "All") {
                return {
                    ...state,
                    cart: [],
                }
            }
            else {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                }
            }
        case ACTUALIZAR_FAV:
            return {
                ...state,
                favorites: action.payload,
            }
        case ADD_TO_FAV:
            let itemFoundFav = state.favorites.map(games => games.id).includes(action.payload.id)
            if (!itemFoundFav) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            }
            else {
                return {
                    ...state
                }
            }
        case DELETE_FOR_FAVS:
            if (action.payload === "All") {
                return {
                    ...state,
                    favorites: [],
                }
            }
            else {
                return {
                    ...state,
                    favorites: state.favorites.filter((item) => item.id !== action.payload),
                }
            }
        case GET_GAME_BY_ID:
            return {
                ...state,
                game: action.payload
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
            return {
                ...state,
                platforms: action.payload
            }
        case GET_TAGS:
            return {
                ...state,
                tags: action.payload
            }
        case GET_GAMES_BY_GENRE:
            console.log(action.payload)
            return {
                ...state,
                videogamesBygenre: action.payload
            }

        case ORDER:
            const orderType = action.payload.orderType
            const orderBy = action.payload.orderBy
            const sortedVideogames = orderType === 'asc' ?
                state.videogames.sort((a, b) => {
                    if (a[orderBy] > b[orderBy]) {
                        return 1
                    }
                    if (a[orderBy] < b[orderBy]) {
                        return -1
                    }
                    return 0
                }) :
                state.videogames.sort((a, b) => {
                    if (a[orderBy] < b[orderBy]) {
                        return 1
                    }
                    if (a[orderBy] > b[orderBy]) {
                        return -1
                    }
                    return 0
                })

            return {
                ...state,
                videogames: sortedVideogames
            }

        case CREATE_GAME:
            return {
                ...state,
                videogames: [...state.videogames, action.payload],
            }
            case POST_VIDEOGAME:
        return{
          ...state
        }
        case HIDE_VIDEOGAME:
        return{
          ...state,
          hidenVideoGame:action.payload
        }
        case CHANGE_NAME:
            return{
                ...state
              } 

        case FILTER_GAMES:
            let { platformby, genreby } = action.payload


            let Allvideogames = state.Allvideogames
            const games1 = platformby === 'all' ? Allvideogames : Allvideogames.filter(game => game.platforms.map(el => el.name).find(platforms => platforms === platformby))
            const games2 = genreby === 'all' ? Allvideogames : Allvideogames.filter(game => game.genres.map(el => el.name).find(genre => genre === genreby))
            const arr1 = games1.filter(element => games2.includes(element));
            const total = arr1.filter(element => state.tagsFilter.includes(element));
            return {
                ...state,
                videogames: total,
                genreby: genreby,
                platformby: platformby
            }
        case FILTER_GAMES_BY_TAGS:
            const specificTag = action.payload
            const statusFiltered =
                specificTag.length === 0 ?
                    state.Allvideogames
                    :
                    state.Allvideogames.filter(games => {
                        let exist = specificTag?.every(tag => games.tags.map(el => el.name)?.includes(tag));
                        if (exist) return games
                        return console.log('se filtraron los juegos')
                    })

            return {
                ...state,
                tagsFilter: statusFiltered,
                Tagsinfilter: specificTag
            }
        case EMPTY_GAME_STATE:
            return {
                ...state,
                game: []
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case CLEAR_USER:
            return {
                ...state,
                user: []
            }

        default: return state
    }
}