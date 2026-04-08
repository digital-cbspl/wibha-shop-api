const db = require("../config/db");

const safe = (v) => (v === undefined ? null : v);

module.exports = {
    create: async (name, slug) => {
        const query =
            "INSERT INTO categories(name, slug) VALUES (?, ?)";

        const values = [
            safe(name),
            safe(slug),
        ];

        const [result] = await db.execute(query, values);
        return result;
    },

    getAll: async () => {
        const [rows] = await db.execute("SELECT * FROM categories");
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.execute(
            "SELECT * FROM categories WHERE id = ?",
            [safe(id)]
        );
        return rows[0];
    },

    update: async (id, name, slug) => {
        const query =
            "UPDATE categories SET name = ?, slug = ? WHERE id = ?";

        const values = [
            safe(name),
            safe(slug),
            safe(id)
        ];

        const [result] = await db.execute(query, values);
        return result;
    },

    delete: async (id) => {
        const [result] = await db.execute(
            "DELETE FROM categories WHERE id = ?",
            [safe(id)]
        );
        return result;
    },
};
