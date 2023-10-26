const actorService = require("../../services/actors-service");

module.exports = {
    list: (req,res) => {
        actorService.create(req.body);
    },
    destroy: (req,res) => {

    }
};