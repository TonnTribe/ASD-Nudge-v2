const { module, DataType } = require("sequelize");
const sequelize = require("../config/connection");

class Game extends Module {}

Game.init(
  {
    // Manually define the primary key
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primarykey: true,
      autoncrement: true,
    },

    name: {
      type: DataType.STRING,
    },

    background_image: {
      type: DataType.STRING,
    },

    description: {
      type: DataType.STRING(3000),
    },

    released: {
      type: DataType.STRING,
    },

    metacritic: {
      type: DataType.INTEGER,
    },

    genres: {
      type: DataType.STRING,
    },
  },

  {
    sequelize,
    timestamps: false,

    // prevent sequize from renaming the table
    freezeTableName: true,
    underscored: true,
    ModelName: "game",
  }
);

module.exports = Game;
