const bcrypt = require('bcrypt');

module.exports = {
    encode: async (userPass) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(userPass, salt)
    },
    decode: async (userPass, encodePass) => {
        return bcrypt.compareSync(userPass, encodePass);
    }
}