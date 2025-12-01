const db = require("../db/queries")



async function getCategories(req, res){
    const categories = await db.getAllCategories();
    res.render('categories', {categories: categories})
}

async function getProducts(req, res){
    const products = await db.getAllData();
    res.render("products", { products: products, productsCategory: products })
}


// controller for displaying product page with all the filter categories and display products of only choosen category
async function getProductCategory(req, res){
    const product = await db.getSingleCategory(req.params.id);
    const products = await db.getAllData();
    res.render("products", {products: product, productsCategory: products})
}


// controller for handling POST method and adding single product to the page

async function postProduct(req, res){
    const {name, quantity, price, category} = req.body;
    const url = req.file.filename;
    await db.insertProduct(name, category, quantity, price, url)
    res.redirect("/products")
}

async function postCategory(req, res){
    const {category} = req.body;
    await db.insertCategory(category)
    res.redirect("/categories")
}
module.exports = {
    getCategories, 
    getProducts,
    getProductCategory,
    postProduct,
    postCategory
}