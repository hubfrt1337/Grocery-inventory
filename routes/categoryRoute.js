const express = require("express")
const categoryRoute = express.Router()
const userControllers = require("../controllers/controllers")

categoryRoute.get("/", (req, res) => {
    res.render("categories")
})

categoryRoute.post("/", userControllers.postCategory)


module.exports = {categoryRoute}