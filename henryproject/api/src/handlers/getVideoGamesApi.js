const axios = require("axios");
const e = require("express");
const {Games, Platforms, Genres, Tags }=require("../db.js");

const {API_KEY} = process.env

const { getVideoGamesDB } = require("./getGamesDB.js");
const getGenres = require("./getGenres.js");
const getPlatforms = require("./getPlataforms.js");
const getTags = require("./getTags.js");
const { uuid } = require('uuid');

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
        console.log('cargo la base de datos')
        let page =[]
        for(let i=1;i<6;i++){
            page.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`))
        }
        const info =await Promise.all(page)
        // console.log(info);
        const videoGames = info.map((el) => (el.data.results)).flat()
        // console.log(videoGames);
        let filtrar = videoGames.map( async (el) => {
            const info = (await axios(`https://api.rawg.io/api/games/${el.id}?key=${API_KEY}`)).data
            const infoVideo = (await axios(`https://api.rawg.io/api/games/${el.id}/movies?key=${API_KEY}`)).data.results
            const infoDos = (await axios(`https://api.rawg.io/api/games/${el.id}/game-series?key=${API_KEY}`)).data.results
            el.description=info.description;
            el.stores =(info.stores.map((e)=>e.store.name)).flat()
            el.developers =info.developers.map((e)=>e.name)
            el.publishers=info.publishers.map((e)=>e.name)
            el.website = info.website
            el.realeaseDate = info.released
            el.esrb_rating = info.esrb_rating ?info.esrb_rating.name: info.esrb_rating
            el.metacritic = info.metacritic
            el.video = infoVideo===[]? null: infoVideo.map((e) => e.data.max)
            el.series = (infoDos.map((e) => [{id: e.id, name: e.name, released: e.released, image: e.background_image}] )).flat()
            return {
                id: el.id,
                name: el.name,
                price: `$ ${Math.round(getRandomArbitrary(10, 40))}`,
                platforms: el.platforms.map(e => e.platform.name),
                genres: el.genres.map(e=>e.name),
                screenshots: el.short_screenshots.map(e=>e.image),
                tags: el.tags.map(e=>e.name),
                description: el.description,
                metacritic: el.metacritic,
                stores: el.stores,
                developers: el.developers,
                publishers: el.publishers,
                website: el.website,
                realeaseDate: el.realeaseDate,
                rating: el.rating,
                esrb_rating: el.esrb_rating,
                image: el.background_image,
                video: el.video,
                series: el.series

            }
        });
        const final1 = (await Promise.all(filtrar));
        let game = final1.map( async (el)=> {
            let create= await Games.create({
                id: uuid,
                name: el.name,
                price: el.price,
                description: el.description,
                rating: el.rating,
                image: el.background_image,
                rating: el.rating,
                image: el.image,
                screenshots: el.screenshots,
                video: el.video,
                screenshots: el.screenshots,
                store: el.stores,
                developers: el.developers,
                publishers: el.publishers,
                website: el.website,
                metacritic: el.metacritic,
                realeaseDate: el.realeaseDate,
                // ratingMoreInfo: el.ratings,
                esrb_rating: el.esrb_rating,
                series: el.series,
                createdInDb: false
            })
            let plat = await Platforms.findAll({where: {name: el.platforms}})
            await create.addPlatforms(plat)
            let game = await Genres.findAll({where: {name: el.genres}})
            await create.addGenres(game)
            let tag = await Tags.findAll({where: {name: el.tags}})
            await create.addTags(tag);
        })
        const final = await Games.findAll();
        return final
               
         // return final;
        // let arrayPromesas=[]
        
        // let infoApi = filtrar.map((el) => {
        //    arrayPromesas.push(axios(`https://api.rawg.io/api/games/${el.id}?key=${API_KEY}`))
           
        // })
        // const infoTotal=  ((await Promise.all(arrayPromesas)).flat());
        // // console.log(infoTotal);
        // const filter =  infoTotal.map( async  (el) => {
        //     const infoVideo = (await axios(`https://api.rawg.io/api/games/${el.data.id}/movies?key=${API_KEY}`)).data.results             
        //     // console.log(infoVideo)
        //     el.data.video = infoVideo;
        //     // console.log(el.data.video);
        //     return  {
        //         id: el.data.id,
        //         name: el.data.name,
        //         description: el.data.description,
        //         metacritic: el.data.metacritic,
        //         stores: el.data.stores.map((e)=>e.store.name),
        //         developers:el.data.developers.map((e)=>e.name),
        //         publishers: el.data.publishers,
        //         website: el.data.website,
        //         realeaseDate: el.data.released,
        //         rating: el.data.rating,
        //         ratingMoreInfo: el.data.ratings,
        //         esrb_rating: el.data.esrb_rating,
        //         image: el.data.background_image,
        //         video: el.data.video
                 
                
        //     }
            
        // })
        // const ver1 = (await Promise.all(filter));
        // // console.log(ver1);
        // return ver1;
        // // return filter
        // const addVideo= filter.map( async (el) => {
        //     const videito = (await axios(`https://api.rawg.io/api/games/${el.id}/movies?key=${API_KEY}`)).data.results;
        //     // console.log(videito);
        //      el.video= videito;
        //     return {el}
        // })
        //  const ver = (await Promise.all(addVideo));
        //  console.log(ver);
        // console.log(addVideo);
        // const videos = filter.map( async (el) =>{
        //     const videito= await axios(`https://api.rawg.io/api/games/${el}/movies?key=${API_KEY}`)
        //     return{
        //         videos: el.videito.results===[]?videito.results.map((e) => e.data.max):videito.results,
        //     
        // })
        // console.log(videito);


    }else {
        return allGames
    }
    
    
    
    // if(allGames.length == 0){
    //     let page =[]
    //     for(let i=1;i<6;i++){
    //         page.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`))
    //     }
    //     const info =await Promise.all(page)
    //     // console.log(info);
    //     const videoGames = info.map((el) => (el.data.results)).flat()
    //     // console.log(videoGames)
    //     const total =videoGames.map((data) => {
    //       return {
    //         id: data.id,
    //         name: data.name,
    //         price: `$ ${Math.round(getRandomArbitrary(10, 40))}`,
    //         rating: data.rating,
    //         image: data.background_image,
    //         platforms: data.platforms.map(e => e.platform.name),
    //         genres: data.genres.map(e=>e.name),
    //         screenshots: data.short_screenshots.map(e=>e.image),
    //         tags: data.tags.map(e=>e.name),
    //         metacritic: data.metacritic,
    //         createdInDb: false
    //     }
    //     })
    //     await getPlatforms();
    //     await getGenres();
    //     await getTags();
    //     let game = total.map( async (el)=> {
    //         let create= await Games.create({
    //             id: el.id,
    //             name: el.name,
    //             price: el.price,
    //             description: el.description,
    //             rating: el.rating,
    //             image: el.image,
    //             screenshots: el.screenshots,
    //             metacritic: el.metacritic
    //         })
    //         // console.log(el.tags)
    //         let plat = await Platforms.findAll({where: {name: el.platforms}})
    //         await create.addPlatforms(plat)
    //         let game = await Genres.findAll({where: {name: el.genres}})
    //         await create.addGenres(game)
    //         let tag = await Tags.findAll({where: {name: el.tags}})
    //         await create.addTags(tag);
    //         })
    //         const final = await Games.findAll();
    //         return final
    // }
    
    // return allGames;
}  


//API_URL
const api_url=`https://api.rawg.io/api/games?key=${API_KEY}`;
// var page=1;





module.exports = {
    getVideogamesApi
}