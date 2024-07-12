const jwt = require("jsonwebtoken");
const { promisify } = require('util');
const User = require("../model/usermodel");

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send("Please login");
    }

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).send("Invalid token");
    }
};

module.exports = isAuthenticated;