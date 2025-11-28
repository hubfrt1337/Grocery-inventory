const express = require('express');
require("dotenv").config({path: "./.env.local"})

const app = express();
app.set("view engine", 'ejs')
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Working")
})

app.listen(PORT, console.log(`Server is listening on: ${PORT}`))