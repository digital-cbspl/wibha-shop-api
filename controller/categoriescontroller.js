// const categories = require("../model/categoriesmodel");

// exports.createCategories = async (req, res) => {
//     const { name, slug } = req.body;
//     console.log(req.body,"hhh");
//     if(!name || !slug ) {
//         return req.status(400).json({ success: false, message: "missing fields are required"});
//     }

//     try{
//         await categories.create(name, slug);
//         res.status(201).json({ success: true, message: "Category created successfully" });
//     }
//     catch(err){
//         res.status(500).json({ success: false, message: err.message });
//     }
// };

// exports.getAllCategories = async (req, res) => {
//     try{
//         const categoriesdata = await categories.getAll();
//         res.status(200).json({ success: true, data: categoriesdata });
//     }
//     catch(err){
//         res.status(500).json({ success: false, message: err.message });
//     }
// };

// exports.getCategoriesById = async (req, res) => {
//     const { id } = req.params;
//     try{
//         const categoriesData = await categories.getById(id);
//         if(!categoriesData) {
//             return res.status(404).json({ success: false, message: "Category not found" });
//         }
//         res.status(200).json({ success: true, data: categoriesData });
//     }
//     catch(err){
//         res.status(500).json({ success: false, message: err.message });
//     }
// };
// exports.updateCategories = async (req, res) => {
//     const { id } = req.params;
//     const { name, slug } = req.body;

//     try{
//         const result = await categories.update(id, name, slug);
//         if(result.affectedRows === 0) {
//             return res.status(404).json({ success: false, message: "Category not found" });
//         }
//         res.status(200).json({ success: true, message: "Category updated successfully" });
//     }
//     catch(err){
//         res.status(500).json({ success: false, message: err.message });
//     }
// };
// exports.deleteCategories = async (req, res) => {
//     const { id } = req.params;
//     try{
//         const result = await categories.delete(id);
//         if(result.affectedRows === 0) {
//             return res.status(404).json({ success: false, message: "Category not found" });
//         }
//         res.status(200).json({ success: true, message: "Category deleted successfully" });
//     }
//     catch(err){
//         res.status(500).json({ success: false, message: err.message });
//     }
// };