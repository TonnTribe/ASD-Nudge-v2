const { model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class News extends model {}

News.init(
  {
    // Manually define the primary key
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primarykey: true,
      autoncrement: true,
    },

    title: {
      type: DataType.STRING,
    },

    Date: {
      type: DataType.STRING,
    },

    description: {
      type: DataType.STRING(1500),
    },

    image: {
      type: DataType.STRING,
    },

    link: {
      type: DataType.STRING,
    },
  },

  {
    sequelize,
    timestamps: false,

    // prevent sequize from renaming the table
    freezeTableName: true,
    underscored: true,
    ModelName: "news",
  }
);

module.exports = News;
