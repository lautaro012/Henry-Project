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
      type: DataTypes.FLOAT,
      allowNull: false
  }, 
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    videoTrailer: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    createdInDb:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    }

  });
};
