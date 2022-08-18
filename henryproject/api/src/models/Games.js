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
    gameplay: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    createdInDb:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    }

  });
};
