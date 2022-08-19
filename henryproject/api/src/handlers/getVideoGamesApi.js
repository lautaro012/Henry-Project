const axios = require("axios")

function videogameInfo(data) {
    return {
        id: data.id,
        name: data.name,
        price: "$19.99",
        rating: data.rating,
        image: data.background_image,
        platforms: data.platforms.map(e => e.platform.name),
        genres: data.genres.map(e=>e.name)
    }
}

async function getVideogamesApi() {
    let page = 1
    let arrayGames = []
    while (page < 6) {
        const info = await axios("https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078&page=" + page)
        info.data.results.forEach(game => {
            arrayGames.push(videogameInfo(game))
        });
        page++
    }
    console.log(arrayGames)
    return arrayGames
}

module.exports = {
    getVideogamesApi
}