"use strict";

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user:'root',
    password: 'sunrin',
    port: 3306,
    database: 'userList'
});

db.connect();

module.exports = db;