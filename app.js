const express = require('express');
require("dotenv").config({path: "./.env.local"})
const userControllers = require("./controllers/controllers")
const app = express();
app.set("view engine", 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/categories', (req, res) => {
    res.render('categories')
})
app.get('/products', userControllers.getProducts)

app.listen(PORT, console.log(`Server is listening on: ${PORT}`))