const pool = require('./pool')

function checkSort(sort){
    return sort === "desc" ? "DESC" : "ASC";
}

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


async function insertCategory(category){
    await pool.query("INSERT INTO products (category) VALUES ($1)", [category])
}

async function getSortedProducts(sort, category){
    const order = checkSort(sort)
    const {rows} = await pool.query(`SELECT * FROM products WHERE category = ($1) ORDER BY price ${order}`, [category]);
    return rows;
}

async function getAllSorted(sort){
    const order = checkSort(sort);
    const {rows} = await pool.query(`SELECT * FROM products ORDER BY price ${order}`)
    return rows;
}

async function selectProductById(id){
    const {rows} = await pool.query("SELECT * FROM products WHERE id = ($1)", [id])
    return rows;
}

async function decrementQuantity(id, quantity ){
    await pool.query(`UPDATE products SET quantity = ($1) WHERE id = ($2)`, [quantity, id]);
}

async function deleteProduct(id){
    await pool.query("DELETE FROM products WHERE id = ($1)", [id])
}

module.exports = {
    getAllCategories,
    getAllProducts,
    getAllData,
    getSingleCategory,
    insertProduct,
    insertCategory,
    getSortedProducts,
    getAllSorted,
    selectProductById,
    decrementQuantity,
    deleteProduct
}