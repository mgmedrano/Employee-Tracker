const inquirer = require('inquirer');
const sequelize = require('./config/connection')
const mysql = require ('mysql2');
const cTable = require('console.table');
const Connection = require('mysql2/typings/mysql/lib/Connection');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

  Connection.connect(function (err) {
      if (err) throw (err);
      promptUser();
  });

  function promptUser () {
      inquirer
      .prompt({
          type: "list",
          message: "What would you like to do?",
          choices: [
              "View All Departments",
              "View All Roles",
              "View All Employees",
              "Add Department",
              "Add Role",
              "Add an Employee",
              "Update Employee Role",
              "ALL DONE"],
      });

db.query('SELECT * FROM employee WHERE mangaer_id IS NULL', function (err, results) {
    // this will console log the results from the 2 parameters above
    console.log(results);
  });




