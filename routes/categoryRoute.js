const express = require("express")
const categoryRoute = express.Router()
const userControllers = require("../controllers/controllers")

categoryRoute.get("/", userControllers.getCategories)

categoryRoute.post("/", userControllers.postCategory)


module.exports = {categoryRoute}