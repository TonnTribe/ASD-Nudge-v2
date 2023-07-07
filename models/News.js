const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class News extends Model {}

News.init(
    {
    // Manually define the primary key
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING(1500),
    },
    image: {
        type: DataTypes.STRING,
    },
    link: {
        type: DataTypes.STRING,
    }
    },
    {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "news",
    }
);

module.exports=News;