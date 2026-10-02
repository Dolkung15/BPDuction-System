const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: '10.110.193.156',
    user: 'username',
    password: 'password',
    database: 'inventorydb'
});

db.connect(err => {
    if (err) throw err;
    console.log("🔥 MySQL Connected...");
});

module.exports = db;
