const {Platforms}=require("../db.js");

const getAllPlataforms=async()=>{
    return await Platforms.findAll({});
}

module.exports={
    getAllPlataforms
}