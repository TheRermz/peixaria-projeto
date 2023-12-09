const { body } = require("express-validator");

const fishValidation = () => {
    return [
        body("name").isString().withMessage("Coloque um Nome válido"),
        body("price")
            .notEmpty()
            .isString()
            .withMessage("Coloque um Preço Válido"),
        body("description")
            .notEmpty()
            .isLength({ min: 10 })
            .withMessage("A descrição é necessária"),
        body("image").notEmpty().withMessage("Uma imagem é necessária"),
    ];
};

module.exports = { fishValidation };
