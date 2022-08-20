const { getAllVideoGames } = require("./getAllVideoGames")

const filterRating = async (rating) =>  {
  try {
    const allGames = await getAllVideoGames();
    const filterRating= allGames.filter((el)=> Number(el.rating)>=Number(rating));
<<<<<<< HEAD
     console.log(filterRating);
    return filterRating;
  } catch (error) {
=======
    console.log(filterRating)
    return res.json(filterRating);
  }
  catch (error) {
>>>>>>> Development
    console.log('error en filtrar por RATING',error)
  }
}
module.exports = filterRating;