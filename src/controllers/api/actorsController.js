const actorService = require("../../services/actors-service");

module.exports = {
    list: (req,res) => {
        actorService.getAllActors()
    },
    destroy: (req,res) => {

    }
};