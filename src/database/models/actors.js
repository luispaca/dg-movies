module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Actors",
      {
        firstName: {
          field: "first_name",
          type: DataTypes.STRING,
        },
        lastName: {
          field: "last_name",
          type: DataTypes.STRING,
        },
        rating: DataTypes.DECIMAL,
      },
      {
        tableName: "actors",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
    Model.associate = function (modelos) {
      Model.belongsToMany(modelos.Movies,{
        as: "movies",
        through: "actor_movie",
        foreignKey: "actor_id",
        otherKey: "movie_id",
        timestamps: false
      })
    }
    return Model;
  };