const repo = require("../repositories/menuRepository");

// 👉 CREATE
exports.createMenu = async (data) => {
  return repo.callMenuSP({
    action: "INSERT",
    ...data,
    is_delete: 0
  });
};

// 👉 GET ALL (Full Menu)
exports.getMenus = async () => {
  const [rows] = await repo.callMenuSP({
    action: "GET"
  });

  return rows[0];
};

// 👉 GET BY ID
exports.getMenuById = async (id) => {
  const [rows] = await repo.callMenuSP({
    action: "GET",
    id
  });

  return rows[0][0];
};

// 👉 GET BY PARENT (submenu / mega)
exports.getMenuByParent = async (parent_id) => {
  const [rows] = await repo.callMenuSP({
    action: "GET",
    parent_id
  });

  return rows[0];
};

// 👉 UPDATE
exports.updateMenu = async (data) => {
  return repo.callMenuSP({
    action: "UPDATE",
    ...data
  });
};

// 👉 DELETE (Soft Delete)
exports.deleteMenu = async (id) => {
  return repo.callMenuSP({
    action: "DELETE",
    id
  });
};