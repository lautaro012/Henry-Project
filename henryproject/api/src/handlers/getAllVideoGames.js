const { getVideoGamesDB } = require("./getGamesDB")
const { getVideogamesApi } = require("./getVideoGamesApi")

const getAllVideoGames = async (req, res) => {
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
    getAllVideoGames
}