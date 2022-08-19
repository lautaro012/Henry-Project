const { getVideoGamesDB } = require("./getGamesDB")
const { getVideogamesApi } = require("./getVideoGamesApi")

//Función para filtrar
const getAllVideoGames = async () => {
    let dbGames = await getVideoGamesDB()
    let apiGames = await getVideogamesApi()
    let allGames = [...dbGames, ...apiGames]
    return allGames
}

//Función para traer juegos y buscar por nombre
const getGamesByName = async (req, res) => {
    let {name} = req.query
    let dbGames = await getVideoGamesDB()
    let apiGames = await getVideogamesApi()
    let allGames = [...dbGames, ...apiGames]
    if(name) {
        let searchByName = allGames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
        if(!searchByName.length) {
            return res.send(allGames)
        } else {
            return res.json(searchByName)
        }
    } 
    return res.send(allGames)
}

  module.exports = {
    getAllVideoGames,
    getGamesByName
}