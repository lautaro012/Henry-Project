const axios = require("axios")
const {API_KEY, Games}=require("../db.js");
const { getVideoGamesDB } = require("./getGamesDB.js");

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
//   async function getVideogamesApi(){
//     let page =[]
//     for(let i=1;i<6;i++){
//         page.push(axios.get(`https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078&page=${i}`))
//     }
//     const info =await Promise.all(page)
//     // console.log(info);
//     const videoGames = info.map((el) => (el.data.results)).flat()
//     // console.log(videoGames)
//     const total =videoGames.map((data) => {
//       return {
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
//     })
//     // console.log(total)
//     return total;
// }  


//API_URL
const api_url=`https://api.rawg.io/api/games?key=${API_KEY}`;
// var page=1;
//Traer los datos de la api
const getVideogamesApi=async()=>{
            // function getRandomArbitrary(min, max) {
            //     return Math.random() * (max - min) + min;
            // }

            //fixie el math random
            function getRandomArbitrary(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
    const dbGames = await Games.findAll();
     if(dbGames.length === 0) {
        const getApi=await axios.get(api_url);
        const getDataNextPage=await getApi.data.next;
        const getApiInfo=await getApi.data.results;


        const totalPage=Math.floor(100/getApiInfo.length);

        var newArreglo=getDataNextPage.split("&");
        var newArreglo2=newArreglo[1].split("=");
        var newAPI=[];
        var page=1;
        while(page<=totalPage){
            newArreglo2[1]=page
            var newData=newArreglo2.join("=");
            newArreglo[1]=newData;
            var newData2=newArreglo.join("&");
            newAPI.push(axios.get(newData2));
            page++;
        }
    var data=[];
    await Promise.all(newAPI)
    .then(values=>{
        for(let i=0;i<values.length;i++){
            const newAPIinfo=[...values[i].data.results];
            const getnewApiInfo=newAPIinfo.map(data=>{
                return{
                    numb: data.id,
                    name:data.name,
                    price: `$ ${Math.round(getRandomArbitrary(10, 40))}`,
                    rating: data.rating,
                    image: data.background_image,
                    // platforms: data.platforms.map(e => e.platform.name),
                    // genres: data.genres.map(e=>e.name),
                    screenshots: data.short_screenshots.map(e=>e.image),
                    createdInDb: false
                    // tags: data.tags.map(e=>e.name)
                }
            });
            data.push(getnewApiInfo);
            
            Games.bulkCreate(data.flat())
        }
    }).catch(error=>{
        console.log("API"+error.message);
    })
    return data.flat();
     }  else{
        // console.log(dbGames)
        return dbGames;
     }
    
}




module.exports = {
    getVideogamesApi
}