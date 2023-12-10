const Admin = require("../model/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
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

// get current admin
const getCurrentAdmin = async (req, res) => {
    const user = req.user;
    res.status(200).json(user);
};

//update an admin
const updateAdmin = async (req, res) => {
    const reqUser = req.user;
    const { name, password } = req.body;

    const user = await Admin.findById(reqUser._id).select("-password");

    if (name) {
        user.name = name;
    }

    if (password) {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        user.password = hashPassword;
    }

    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
};

// get admin by id

const getAdminById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Admin.findById(id).select("-password");
        if (!user) {
            res.status(404).json({ errors: ["Usuário não encontrado"] });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ errors: ["Usuário não encontrado"] });
        return;
    }
};

// delete an admin
const delAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Admin.findById(id);

        if (!user) {
            res.status(404).json({ errors: ["Usuário não encontrado"] });
            return;
        }

        await user.deleteOne();
        return res.status(200).json({ message: "Usuário removido" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ errors: ["Erro ao excluir usuário"] });
    }
};

module.exports = {
    registerNewAdmin,
    loginAdmin,
    getCurrentAdmin,
    updateAdmin,
    getAdminById,
    delAdmin,
};
