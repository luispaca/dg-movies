const { Actors } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
    getAllActors: () => {
        return Actors.findAll();
    },
    getActorsDetail: (id) => {
        return Actors.findByPk(id);
    }
};