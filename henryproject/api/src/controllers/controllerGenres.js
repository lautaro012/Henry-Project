const {Genres}=require("../db.js");


const getAllGenres=async()=>{
    return await Genres.findAll({});
}

module.exports={
    getAllGenres
}