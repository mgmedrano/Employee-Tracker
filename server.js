const inquirer = require('inquirer');
const sequelize = require('./config/connection')
const mysql = require ('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');
require("console.table");

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
          name: "option",
          message: "What would you like to do?",
          choices: [
              "View All Departments",
              "View All Roles",
              "View All Employees",
              "Add Department",
              "Add Role",
              "Add Employee",
              "Update Employee Role",
              "ALL DONE"
            ],
      })
      .then(function(result) {
          switch (result.option) {
              case "View All Departments":
                  viewAllDepartments();
                  break;
              case "View All Roles":
                  viewAllRoles();
                  break;
              case "View All Employees":
                  viewAllEmployees();
                  break;
              case "Add Department":
                  AddDepartment();
                  break;
               case "Add Role":
                  AddRole();
                  break;
               case "Add Employee":
                  AddEmployee();
                  break;
               case "Update Employee Role":
                  UpdateEmployeeRole();
                  break;
                case "ALL DONE":
                  Connection.end();
                  break;
          }
      });
  }

  function viewAllDepartments() {
      let query = "SELECT * FROM department": {
          connection.query(query, function(err,res) {
              if (err) throw err;
              console.tables(res);
              promptUser();
          });
      }
  }

  function viewAllRoles() {
    let query = "SELECT * FROM role": {
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.tables(res);
            promptUser();
        });
    }
}

   function viewAllEmployees() {
    let query = "SELECT * FROM employee": {
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.tables(res);
            promptUser();
        });
    }
}

  function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is name of department?",
        name: "Department"
    })
    .then(function(answer){
        connection.query("INSERT INTO department(name) VALUES (?)", [answer.Department], function (err, res){
            if(err) throw err;
            console.table(res)
            promptUser();
        })
    })
  }

  function addRole() {
    let query = "SELECT * FROM role": {
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.tables(res);
            promptUser();
        });
    }
}

  function addEmployee() {
    let query = "SELECT * FROM employee": {
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.tables(res);
            promptUser();
        });
    }
}


db.query('SELECT * FROM employee WHERE mangaer_id IS NULL', function (err, results) {
    // this will console log the results from the 2 parameters above
    console.log(results);
  });




