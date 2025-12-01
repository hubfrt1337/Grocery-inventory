const pool = require('./pool')

// return all data of the products table
async function getAllData(){
    const {rows} = await pool.query("SELECT * FROM products")
    return rows;
}

// return all categories of the table
async function getAllCategories(){
    const {rows} = await pool.query("SELECT category FROM products")
    return rows
}

// return all names of products
async function getAllProducts(){
    const {rows} = await pool.query("SELECT product_name FROM products")
    return rows;
}

async function getSingleCategory(id){
    const {rows} = await pool.query("SELECT product_name, category, price, quantity, image_url FROM products WHERE category = ($1)", [id])
    return rows;
}

async function insertProduct(name, category, quantity, price, url){
    await pool.query("INSERT INTO products (product_name, category, price, quantity, image_url) VALUES ($1, $2, $3, $4, $5)", [name, category, price, quantity, url])
}

module.exports = {
    getAllCategories,
    getAllProducts,
    getAllData,
    getSingleCategory,
    insertProduct
}