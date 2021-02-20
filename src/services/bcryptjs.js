const Bcrypt = require("bcryptjs");

export const encryptionService = {

    hashPassword  (value) {
        return Bcrypt.hashSync(value, 10);
    },

}
