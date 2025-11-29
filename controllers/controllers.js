const db = require("../db/queries")

async function getCategories(req, res){
    const categories = await db.getAllCategories();
    res.send()
}

async function getProducts(req, res){
    const products = await db.getAllData();
    res.render("products", { products: products, productsCategory: products })
}

async function getProductCategory(req, res){
    const product = await db.getSingleCategory(req.params.id);
    const products = await db.getAllData();
    res.render("products", {products: product, productsCategory: products})
}

module.exports = {
    getCategories, 
    getProducts,
    getProductCategory
}