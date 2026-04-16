const repo = require("../repositories/menuRepository");

// 👉 CREATE
exports.createMenu = async (data) => {
  // Ensure the keys in 'data' match: name, slug, location, parent_id, type, url, etc.
  return repo.callMenuSP({
    action: "INSERT",
    ...data,
    is_delete: 0
  });
};

// 👉 GET ALL (Hierarchical / Full Menu)
exports.getMenus = async () => {
  const [result] = await repo.callMenuSP({
    action: "GET"
  });
  // MySQL returns [ [rows], {metadata} ]. We want the rows.
  return result[0]; 
};

// 👉 GET BY LOCATION (Critical for Header vs Footer binding)
exports.getMenuByLocation = async (location) => {
  const [result] = await repo.callMenuSP({
    action: "GET",
    location: location // Pass 'header' or 'footer'
  });
  return result[0];
};

// 👉 GET BY ID
exports.getMenuById = async (id) => {
  const [result] = await repo.callMenuSP({
    action: "GET",
    id
  });
  // Return the single object from the first row of the first result set
  return result[0] ? result[0][0] : null;
};

// 👉 GET BY PARENT (For dynamic loading of submenus/mega menus)
exports.getMenuByParent = async (parent_id) => {
  const [result] = await repo.callMenuSP({
    action: "GET",
    parent_id
  });
  return result[0];
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