const db = require("../config/db");

const safe = (v) => (v === undefined ? null : v);

module.exports = {
    create: async (name, phone, email) => {
        const query =
            "INSERT INTO users(name, phone, email) VALUES (?, ?, ?)";

        const values = [
            safe(name),
            safe(phone),
            safe(email),
        ];

        const [result] = await db.execute(query, values);
        return result;
    },

    getAll: async () => {
        const [rows] = await db.execute("SELECT * FROM users");
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE id = ?",
            [safe(id)]
        );
        return rows[0];
    },

    update: async (id, name, phone, email) => {
        const query =
            "UPDATE users SET name = ?, phone = ?, email = ? WHERE id = ?";

        const values = [
            safe(name),
            safe(phone),
            safe(email),
            safe(id),
        ];

        const [result] = await db.execute(query, values);
        return result;
    },

    delete: async (id) => {
        const [result] = await db.execute(
            "DELETE FROM users WHERE id = ?",
            [safe(id)]
        );
        return result;
    },
};
