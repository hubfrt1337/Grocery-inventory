const express = require('express');
require("dotenv").config({path: "./.env.local"})
const {productsRoute} = require("./routes/productsRoute")
const {categoryRoute} = require("./routes/categoryRoute")

const app = express();
app.set("view engine", 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render("index")
})

app.use('/categories', categoryRoute)
app.use('/products', productsRoute)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({message: " There occur an error"})
})

app.listen(PORT, console.log(`Server is listening on: ${PORT}`))