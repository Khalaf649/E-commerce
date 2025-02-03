const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../Models/user/User');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            isAdmin: false,
            cartID: null,
            ordersID: [],
            wishlistID: null
        });
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ success: true, token });

    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}
exports.logout = async (req, res) => {
    res.status(200).json({ success: true, message: 'User logged out' });
}
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({ success: true, user });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}
exports.updatePassword = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const { oldPassword, newPassword } = req.body;
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ success: true, message: 'Password updated successfully' });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const { name, email } = req.body;
        user.name = name;
        user.email = email;
        await user.save();
        res.status(200).json({ success: true, message: 'User updated successfully' });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}
