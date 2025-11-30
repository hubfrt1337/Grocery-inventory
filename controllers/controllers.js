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




async function postProduct(req, res){
    const {name, quantity, price, category} = req.body;
    const url = req.file.filename;
    await db.insertProduct(name, category, quantity, price, url)
    res.redirect("/products")
}

module.exports = {
    getCategories, 
    getProducts,
    getProductCategory,
    postProduct
}