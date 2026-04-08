const user = require("../model/usermodel");

exports.createUser = async (req, res) => {
    const { name, phone, email } = req.body;
    console.log(req.body,"hhh");
    if(!name || !phone || !email ) {
        return req.status(400).json({ success: false, message: "missing fields are required"});
    }

    try{
        await user.create(name, phone, email);
        res.status(201).json({ success: true, message: "User created successfully" });
    }
    catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try{
        const users = await user.getAll();
        res.status(200).json({ success: true, data: users });
    }
    catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try{
        const userData = await user.getById(id);
        if(!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: userData });
    }
    catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, phone, email } = req.body;

    try{
        const result = await user.update(id, name, phone, email);
        if(result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: "User updated successfully" });
    }
    catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        const result = await user.delete(id);
        if(result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: "User deleted successfully" });
    }
    catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
};