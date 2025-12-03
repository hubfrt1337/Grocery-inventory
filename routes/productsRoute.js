const express = require('express');
const productsRoute = express.Router();
const path = require("path")
const multer = require("multer")
const userControllers = require("../controllers/controllers");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage})

productsRoute.get("/", userControllers.getProducts)

// productsRoute.get("/:id", userControllers.getProductCategory)

productsRoute.post('/', upload.single("image"), userControllers.postProduct)
module.exports = {productsRoute}

productsRoute.patch('/', userControllers.deleteProduct);
