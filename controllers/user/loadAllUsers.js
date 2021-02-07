const Users = require('../../models/users.model');

module.exports.loadAllUsers = async function(req, res, next) {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        next(error);
    }
}