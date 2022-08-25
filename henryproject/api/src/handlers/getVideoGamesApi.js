const axios = require("axios")
const {Games, Platforms, Genres, Tags }=require("../db.js");
const {API_KEY} = process.env
const { getVideoGamesDB } = require("./getGamesDB.js");
const getGenres = require("./getGenres.js");
const getPlatforms = require("./getPlataforms.js");
const getTags = require("./getTags.js");

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
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    const allGames= await Games.findAll();
    if(allGames.length == 0){
        let page =[]
        for(let i=1;i<6;i++){
            page.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`))
        }
        const info =await Promise.all(page)
        // console.log(info);
        const videoGames = info.map((el) => (el.data.results)).flat()
        // console.log(videoGames)
        const total =videoGames.map((data) => {
          return {
            id: data.id,
            name: data.name,
            price: `$ ${Math.round(getRandomArbitrary(10, 40))}`,
            rating: data.rating,
            image: data.background_image,
            platforms: data.platforms.map(e => e.platform.name),
            genres: data.genres.map(e=>e.name),
            screenshots: data.short_screenshots.map(e=>e.image),
            tags: data.tags.map(e=>e.name),
            metacritic: data.metacritic,
            createdInDb: false
        }
        })
        await getPlatforms();
        await getGenres();
        await getTags();
        let game = total.map( async (el)=> {
            let create= await Games.create({
                id: el.id,
                name: el.name,
                price: el.price,
                rating: el.rating,
                image: el.image,
                screenshots: el.screenshots,
                metacritic: el.metacritic
            })
            // console.log(el.tags)
            let plat = await Platforms.findAll({where: {name: el.platforms}})
            await create.addPlatforms(plat)
            let game = await Genres.findAll({where: {name: el.genres}})
            await create.addGenres(game)
            let tag = await Tags.findAll({where: {name: el.tags}})
            await create.addTags(tag);
            })
            const final = await Games.findAll();
            return final
    }
    
    return allGames;
}  


//API_URL
const api_url=`https://api.rawg.io/api/games?key=${API_KEY}`;
// var page=1;





module.exports = {
    getVideogamesApi
}