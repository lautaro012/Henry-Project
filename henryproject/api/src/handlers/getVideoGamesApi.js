const axios = require("axios")


// function videogameInfo(data) {
//     return {
//         id: data.id,
//         name: data.name,
//         price: "$19.99",
//         rating: data.rating,
//         image: data.background_image,
//         platforms: data.platforms.map(e => e.platform.name),
//         genres: data.genres.map(e=>e.name),
//         screenshots: data.short_screenshots.map(e=>e.image),
//         tags: data.tags.map(e=>e.name)
//     }
// }

// async function getVideogamesApi() {
//     let page = 1
//     let arrayGames = []
//     while (page < 6) {
//         const info = await axios("https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078&page=" + page)
//         info.data.results.forEach(game => {
//             arrayGames.push(videogameInfo(game))
//         });
//         page++
//     }
//     console.log(arrayGames)
//     return arrayGames
// }
  async function getVideogamesApi(){
    let page =[]
    for(let i=1;i<6;i++){
        page.push(axios.get(`https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078&page=${i}`))
    }
    const info =await Promise.all(page)
    // console.log(info);
    const videoGames = info.map((el) => (el.data.results)).flat()
    // console.log(videoGames)
    const total =videoGames.map((data) => {
      return {
        id: data.id,
        name: data.name,
        price: "$19.99",
        rating: data.rating,
        image: data.background_image,
        platforms: data.platforms.map(e => e.platform.name),
        genres: data.genres.map(e=>e.name),
        screenshots: data.short_screenshots.map(e=>e.image),
        tags: data.tags.map(e=>e.name)
    }
    })
    // console.log(total)
    return total;
}  
module.exports = {
    getVideogamesApi
}