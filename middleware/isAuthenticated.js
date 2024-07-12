const jwt = require("jsonwebtoken");
const { findById } = require("../model/blogModel");
const promisify = require('util').promisify;
const User = require("../model/usermodel"); // Corrected reference

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token || token == null) {
        return res.send("please login");
    }
    jwt.verify(token, process.env.SECRET, async (err, result) => {
        if (err) {
            return res.send("Invalid token");
        } else {
            const data = await User.findById(result.userId); // Corrected typo
            if (!data) {
                return res.send("User not found");
            }else{
            req.userId = result.userId;
            next();
            }
        }
    });
};

module.exports = isAuthenticated;