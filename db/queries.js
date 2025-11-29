const pool = require('./pool')


async function getAllData(){
    const {rows} = await pool.query("SELECT * FROM products")
    return rows;
}

async function getAllCategories(){
    const {rows} = await pool.query("SELECT category FROM products")
    return rows
}

async function getAllProducts(){
    const {rows} = await pool.query("SELECT product_name FROM products")
    return rows;
}

async function getSingleCategory(id){
    console.log(id)
    const {rows} = await pool.query("SELECT product_name, category, price, quantity, image_url FROM products WHERE category = ($1)", [id])
    return rows;
}

module.exports = {
    getAllCategories,
    getAllProducts,
    getAllData,
    getSingleCategory
}