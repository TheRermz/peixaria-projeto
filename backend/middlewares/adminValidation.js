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

module.exports = { adminValidation };
