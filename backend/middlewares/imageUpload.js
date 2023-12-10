const multer = require("multer");
const path = require("path");

// dest to store img

const imgStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = "fish";
        cb(null, `uploads/${folder}/`);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});

const imgUpload = multer({
    storage: imgStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Por favor envie uma imagem válida"));
        }
        cb(undefined, true);
    },
});

module.exports = { imgUpload };
