const Admin = require("../model/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const genToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: "7d",
    });
};

// Register a new admin

const registerNewAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    // check if user exists
    const user = await Admin.findOne({ email });
    if (user) {
        res.status(422).json({ errors: ["Email já cadastrado"] });

        return;
    }
    // hash password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    //create user

    const newUser = await Admin.create({
        name,
        email,
        password: hashPassword,
    });

    // if user is created, generate token
    if (!newUser) {
        res.status(422).json({ errors: ["Erro ao cadastrar usuário"] });
        return;
    }
    res.status(201).json({ _id: newUser._id, token: genToken(newUser._id) });
};

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    const user = await Admin.findOne({ email });

    if (!user) {
        res.status(404).json({ errors: ["Email não cadastrado"] });
        return;
    }

    //check if pwd matches
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ errors: ["Senha incorreta"] });
        return;
    }

    res.status(201).json({ _id: user._id, token: genToken(user._id) });
};

module.exports = {
    registerNewAdmin,
    loginAdmin,
};
