const { body } = require("express-validator");

const adminValidation = () => {
    return [
        body("name").isString().withMessage("Coloque um Nome válido"),
        body("email").isEmail().withMessage("Coloque um Email válido"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Coloque uma senha com no mínimo 6 caracteres"),
        body("confirmPassword").custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("As senhas devem ser iguais");
            }
            return true;
        }),
    ];
};

const loginValidation = () => {
    return [
        body("email").isEmail().withMessage("Coloque um Email válido"),
        body("password").isString().withMessage("A senha é obrigatória"),
    ];
};

const adminUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isString()
            .withMessage("Coloque um Nome válido"),
        body("password")
            .optional()
            .isLength({ min: 6 })
            .withMessage("Coloque uma senha com no mínimo 6 caracteres"),
    ];
};

module.exports = { adminValidation, loginValidation, adminUpdateValidation };
