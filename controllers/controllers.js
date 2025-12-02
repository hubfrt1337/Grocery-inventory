const db = require("../db/queries")



function returnUniqueArray(array){
    const newArray = array.map(cat => cat.category)
    return [...new Set(newArray)]
}

async function getCategories(req, res){
    const categories = await db.getAllCategories();
    const newArr = categories.map(cat => cat.category)
    const unique = [... new Set(newArr)]
   // findFilter()
    res.render('categories', {categories: unique})
}

async function getProducts(req, res){
    const products = await db.getAllData();
    const newArr = products.map(cat => cat.category)
    const unique = [... new Set(newArr)]
    res.render("products", { products: products, productsCategory: unique })
}


// controller for displaying product page with all the filter categories and display products of only choosen category
async function getProductCategory(req, res){
    const product = await db.getSingleCategory(req.params.id);
    const unique = returnUniqueArray(await db.getAllData())
    res.render("products", {products: product, productsCategory: unique})
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

async function getAscProducts(req, res){
    const product = await db.getAscProducts();
    const products = await db.getAllData();
    res.render("products", {products: product, productsCategory: products})
}
module.exports = {
    getCategories, 
    getProducts,
    getProductCategory,
    postProduct,
    postCategory
}