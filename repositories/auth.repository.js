const db = require('../config/db'); 

class AuthRepository {
    async getUserByCredential(identifier) {
        const [rows] = await db.query(
            `CALL UserCRUD('GET_BY_CREDENTIAL', NULL, NULL, ?, ?, NULL, NULL, NULL, NULL, NULL, NULL)`,
            [identifier, identifier] 
        );
        return rows[0][0]; 
    }

    async createUser(userData) {
        const { name, phone, email, password, role = 'user' } = userData;
        const [result] = await db.query(
            `CALL UserCRUD('CREATE', NULL, ?, ?, ?, ?, ?, 0, 1, NULL, NULL)`,
            [name, phone, email, password, role]
        );
        return result;
    }
}

module.exports = new AuthRepository();