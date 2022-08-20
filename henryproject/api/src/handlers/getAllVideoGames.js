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
    let {name, genre, platform, tag } = req.query
       
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
    if(genre){
        let gen= genre[0].toUpperCase() + genre.slice(1);
        let filterGenre= allGames.filter((e) => e.genres.includes(gen));
        if(!filterGenre.length){
            return res.send(allGames)
        } else{
            return res.send(filterGenre);
        }
    }
    if(platform){
        let plat= platform[0].toUpperCase() + platform.slice(1);
        let filterPlatform= allGames.filter((e) => e.platforms.includes(plat));
        if(!filterPlatform.length){
            return res.send(allGames)
        } else{
            return res.send(filterPlatform);
        }
    }
    if(tag){
        let ta= tag[0].toUpperCase() + tag.slice(1);
        let filterTags= allGames.filter((e) => e.tags.includes(ta));
        if(!filterTags.length){
            return res.send(allGames)
        } else{
            return res.send(filterTags);
        }
    }

    return res.send(allGames)

}


  module.exports = {
    getAllVideoGames,
    getGamesByName
}