const axios = require("axios")



async function getVideogamesApi() {
    let page = 1
    let arrayGames = []
    while (page < 6) {
        const info = await axios("https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078&page=" + page)
        info.data.results.forEach(game => {
            arrayGames.push(game)
        });
        page++
    }
    console.log(arrayGames)
    return arrayGames
}

module.exports = {
    getVideogamesApi
}