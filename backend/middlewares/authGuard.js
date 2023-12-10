const Admin = require("../model/Admin");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    // check if header has a token
    if (!token) {
        res.status(401).json({ errors: ["Acesso negado"] });
        return;
    }
    //check if token is valid
    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = await Admin.findById(verified.id).select("-password");

        next();
    } catch (err) {
        res.status(401).json({ errors: ["Acesso negado -- Token inválido"] });
    }
};

module.exports = authGuard;
