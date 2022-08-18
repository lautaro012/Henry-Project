const axios = require('axios');
const { Platforms } = require('../db');
require('dotenv').config();
const {API_KEY} =process.env;
const getPlatforms = async () => {
  try {
    const platformsDb= await Platforms.findAll();
    
    if(platformsDb.length===0){
      const page = 10;
      const link =[];
      for(let i=1;i<=page;i++){
        link.push(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
      }
      const promiseLink=link.map((link) => axios.get(link));
      const infoPlatforms= await Promise.all(promiseLink);
      const platformsAll = (infoPlatforms.map((el)=> el.data.results)).flat();
      const infoPlat = (platformsAll.map((el) => el.platforms)).flat();
      const info = (infoPlat.map((el) => el.platform.name));
      console.log(info)
      const arraySinRep= [];
      info.forEach((el) =>{
        if(!arraySinRep.includes(el)){
          arraySinRep.push(el)
        }
      })
      // console.log(arraySinRep);
      arraySinRep.map(async (el) => {
        await Platforms.findOrCreate({
          where: {name: el}
        })
      })
      const platformTotal= await Platforms.findAll();
      return platformTotal;
    }else{
      return platformsDb;
    }  
  } catch (error) {
    console.log('error en cargar las Platforms',error)
  }
}

module.exports = getPlatforms;