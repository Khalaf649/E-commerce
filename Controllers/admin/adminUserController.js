const bcrypt = require('bcrypt');
const User = require('../../Models/User');
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}   
 exports.getUserById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ success: false, message: 'User id is required' });
        }
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, user });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
 }
 exports.addUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // 🔹 Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // 🔹 Check if the user already exists (use findOne for efficiency)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // 🔹 Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 🔹 Create new user (remove unnecessary await)
        const user = new User({
            name,
            email,
            password: hashedPassword,
            isAdmin: false,
            cartID: null,
            ordersID: [],
            wishlistID: null
        });

        // 🔹 Save user to database
        await user.save();

        // 🔹 Return success response
        return res.status(201).json({ success: true, message: "User added successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};