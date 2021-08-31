const inquirer = require('inquirer');
const express = require('express');
const sequelize = require('./config/connection')
const mysql = require ('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

db.query('SELECT * FROM employee WHERE mangaer_id IS NULL', function (err, results) {
    // this will console log the results from the 2 parameters above
    console.log(results);
  });




