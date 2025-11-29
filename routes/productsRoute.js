const express = require('express');
const productsRoute = express.Router();
const userControllers = require("../controllers/controllers");


productsRoute.get("/", userControllers.getProducts)

productsRoute.get("/:id", userControllers.getProductCategory)

module.exports = {productsRoute}