const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate : {
        min: 1,
        max: 5,
      } 
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, { timestamps: false },);
};
