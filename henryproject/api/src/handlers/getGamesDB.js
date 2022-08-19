const {Games} = require('../db')

const getVideoGamesDB = async () => {
    let gamesDB = await Games.findAll()
  return gamesDB;
}


module.exports = {
    getVideoGamesDB
}