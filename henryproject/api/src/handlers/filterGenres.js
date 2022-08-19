const axios = require('axios');
const { getAllVideoGames } = require('./getAllVideoGames');

const filterGenres = async (genre) => {
  try {
    const allGames= await getAllVideoGames();
    const filterGenres= allGames.filter((el) => el.genre.includes(genre));
    return filterGenres;
  } catch (error) {
    console.log('Error al filtrar por genero',error)
  }

}

exports.module= filterGenres;