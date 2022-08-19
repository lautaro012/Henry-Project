const axios= require('axios');
const { getAllVideoGames } = require('./getAllVideoGames');

const filterPlatforms = async (platforms) => {
    try {
      const allGames= await getAllVideoGames();
      const filterPlatforms= allGames.filter((el) => el.platforms);
      console.log(filterPlatforms);
    } catch (error) {
      console.log('Error al filtrar por Plataformas',error)
    }
}