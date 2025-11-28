const db = require("../db/queries")

async function getCategories(req, res){
    const categories = await db.getAllCategories();
    console.log('categories', categories)
    res.send()
}

async function getProducts(req, res){
    const products = await db.getAllProducts();
    console.log(products, "products");
    res.render("products", { products: products })
}

module.exports = {
    getCategories, 
    getProducts
}