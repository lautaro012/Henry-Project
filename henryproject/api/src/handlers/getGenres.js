const axios =require('axios');
const { Genres } =require('../db');
require('dotenv').config();
const {API_KEY} =process.env;
const getGenres = async ()  =>{
  try {
    const allGenres = await Genres.findAll();
    if(allGenres.length===0){
      const page = 10;
      const link =[];
      for(let i=1;i<=page;i++){
        link.push(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
      }
      const promiseLink=link.map((link) => axios.get(link));
      
      const genresPromise = (await Promise.all(promiseLink));
      
      const info = genresPromise.map((el) => el.data.results).flat();
      
      const genres = (info.map((el) => el.genres )).flat()
      
      const infoFinal = genres.map(((el) => el.name))
      
      const arraySinRep= [];
      
      infoFinal.forEach((el) =>{
        if(!arraySinRep.includes(el)){
          arraySinRep.push(el)
        }
      })
      
      arraySinRep.map(async (el) => {
        await Genres.findOrCreate({
          where: {name: el}
        })
      })
      const genre = await Genres.findAll();
      // console.log(genre)
      return genre;
    }else{
      return allGenres;
    }
  } catch (error) {
    console.log('Error en cargar los generos',error)
  }  
}

module.exports= getGenres;