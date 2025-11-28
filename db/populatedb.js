const { Client } = require('pg')
require("dotenv").config({path: './.env.local'})

const SQL = `
 CREATE TABLE IF NOT EXISTS products (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 product_name VARCHAR(50),
 category VARCHAR(50),
 price NUMERIC(6,2),
 quantity INT
 );

 INSERT INTO products (product_name, category, price, quantity)
 VALUES ('Apple', 'Fruits', 0.20, 50);
`

async function main(){
    console.log("seeding...", process.env.DATABASE_URL)
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done")
}
main()