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
    image: {
      type: DataTypes.TEXT,
      defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    videoTrailer: {
      type: DataTypes.TEXT,
      allowNull:true
    },

    tags: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdInDb:{
        type: DataTypes.BOOLEAN,
        defaultValue:true,
    }

  });
};
