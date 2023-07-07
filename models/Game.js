class Game extends Model {}

Game.init(
  {
    // Manually define the primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    background_image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(3000),
    },
    released: {
      type: DataTypes.STRING,
    },
    metacritic: {
      type: DataTypes.INTEGER,
    },
    genres: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;