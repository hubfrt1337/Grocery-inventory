const db = require("../db/queries")



function returnUniqueArray(array) {
    const newArray = array.map(cat => cat.category)
    return [...new Set(newArray)]
}

async function getCategories(req, res) {
    const categories = await db.getAllCategories();
    const newArr = categories.map(cat => cat.category)
    const unique = [... new Set(newArr)]
    // findFilter()
    res.render('categories', { categories: unique })
}

async function getProducts(req, res) {
    const products = await db.getAllData();
    const newArr = products.map(cat => cat.category)
    const unique = [... new Set(newArr)]
    const sort = req.query.sort;
    const category = req.query.category;
    if (sort || category) {
        if (sort && !category) {
            // render all products ordered
            const product = await db.getAllSorted(sort)
            return res.render("products", { products: product, productsCategory: unique, sort: sort })
        } else if (category && !sort) {
            const product = category === "all" ? products : await db.getSingleCategory(category)
            return res.render("products", { products: product, productsCategory: unique, category: category })
        } else {
            // both sort and category present, or other combinations
            let product;
            if (category === 'all') {
                product = await db.getAllSorted(sort)
            } else {
                product = await db.getSortedProducts(sort, category)
            }
            return res.render("products", { products: product, productsCategory: unique, sort: sort, category: category })
        }
    }

    return res.render("products", { products: products, productsCategory: unique })
}


// controller for displaying product page with all the filter categories and display products of only choosen category
async function getProductCategory(req, res) {
    const product = await db.getSingleCategory(req.params.id);
    const unique = returnUniqueArray(await db.getAllData())
    console.log("działa to w ogole?")
    res.render("products", { products: product, productsCategory: unique })
}


// controller for handling POST method and adding single product to the page

async function postProduct(req, res) {
    const { name, quantity, price, category } = req.body;
    const url = req.file.filename;
    await db.insertProduct(name, category, quantity, price, url)
    res.redirect("/products")
}

async function postCategory(req, res) {
    const { category } = req.body;
    await db.insertCategory(category)
    res.redirect("/categories")
}

async function getAscProducts(req, res) {
    const product = await db.getAscProducts();
    const products = await db.getAllData();
    res.render("products", { products: product, productsCategory: products })
}

async function deleteProduct(req, res) {
    const id = req.params.id;
    await db.deleteProductById(id);
    res.status(200).json({ message: "Product deleted successfully" });
}
module.exports = {
    getCategories,
    getProducts,
    getProductCategory,
    postProduct,
    postCategory
}