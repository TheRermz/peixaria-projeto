const { body } = require("express-validator");

const fishValidation = () => {
    return [
        body("name").isString().withMessage("Coloque um Nome válido"),
        body("price").isString().withMessage("Coloque um Preço Válido"),
        body("description")
            .isLength({ min: 10 })
            .withMessage("A descrição é necessária"),
        body("image")
            .optional()
            .custom((value, { req }) => {
                if (req.file) {
                    return true;
                }
                throw new Error("A imagem é necessária");
            }),
        body("category").isString().withMessage("Coloque uma Categoria válida"),
        body("quantity")
            .isNumeric()
            .withMessage("Coloque uma Quantidade válida"),
    ];
};

const fishUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isString()
            .withMessage("Coloque um Nome válido"),
        body("price")
            .optional()
            .isString()
            .withMessage("Coloque um Preço Válido"),
        body("description")
            .optional()
            .isLength({ min: 10 })
            .withMessage("A descrição é necessária"),
        body("image")
            .optional()
            .custom((value, { req }) => {
                if (req.file) {
                    return true;
                }
                throw new Error("A imagem é necessária");
            }),
        body("category")
            .optional()
            .isString()
            .withMessage("Coloque uma Categoria válida"),
        body("quantity")
            .optional()
            .isNumeric()
            .withMessage("Coloque uma Quantidade válida"),
    ];
};

module.exports = { fishValidation, fishUpdateValidation };
