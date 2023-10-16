module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Genres",
      {
        name: DataTypes.STRING,
        ranking: DataTypes.INTEGER,
        active: DataTypes.INTEGER,
      },
      {
        tableName: "genres",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
    Model.associate = function (modelos) {
      Model.hasMany(modelos.Movies,{
        as: "movies",
        foreignKey: "genre_id"
      });
    }
    return Model;
};