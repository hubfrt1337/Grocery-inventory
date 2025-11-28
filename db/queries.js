const pool = require('./pool')


async function getAllCategories(){
    const {rows} = await pool.query("SELECT category FROM products")
    return rows
}

async function getAllProducts(){
    const {rows} = await pool.query("SELECT product_name FROM products")
    return rows;
}

module.exports = {
    getAllCategories,
    getAllProducts
}