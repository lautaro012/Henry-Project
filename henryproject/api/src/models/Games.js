const { STRING } = require('sequelize');
const { DataTypes, UUID, UUIDV4  } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('games', {
    id:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
  }, 
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      allowNull:false
    },
    video: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // defaultValue:"https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif",
      allowNull:true
    },
    screenshots: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    store: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:true,
    },
    developers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:true,
    },
    publishers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    realeaseDate: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    metacritic : {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    // ratingMoreInfo: {
    //   type: DataTypes.ARRAY(DataTypes.JSONB),
    //   allowNull:true,
    // },
    esrb_rating: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    series: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull:true,
    },
    createdInDb:{
        type: DataTypes.BOOLEAN,
        defaultValue:true,
    }

  });
};
