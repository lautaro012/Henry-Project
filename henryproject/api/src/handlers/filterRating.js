const { getAllVideoGames } = require("./getAllVideoGames")

const filterRating = async (rating) =>  {
  try {
    const allGames = await getAllVideoGames();
    const filterRating= allGames.filter((el)=> Number(el.rating)>=Number(rating));
    return filterRating;
  } catch (error) {
    console.log('error en filtrar por RATING',error)
  }
}

module.exports = filterRating;