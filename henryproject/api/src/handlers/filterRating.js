const { getAllVideoGames } = require("./getAllVideoGames")

const filterRating = async (req,res) =>  {
  const {rating} = req.params;
  try {
    const allGames = await getAllVideoGames();
    const filterRating= allGames.filter((el)=> Number(el.rating)>=Number(rating));
    console.log(filterRating)
    return res.json(filterRating);
  }
    catch (error) {
    console.log('error en filtrar por RATING',error)
  }
}

module.exports = filterRating;