const inquirer = require('inquirer');
const sequelize = require('./config/connection');
const mysql = require ('mysql2');
const cTable = require("console.table");

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
      inquirer.prompt({
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
              "Quit"
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
                case "Quit":
                  Connection.end();
                  Quit();
                  break;
                  
          }
      });
  }

  function viewAllDepartments() {
      let query = "SELECT * FROM department"; {
          connection.query(query, function(err,res) {
              if (err) throw err;
              console.tables(res);
              promptUser();
          });
      }
  }

  function viewAllRoles() {
    let query = "SELECT * FROM role"; {
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.tables(res);
            promptUser();
        });
    }
}

   function viewAllEmployees() {
    let query = "SELECT * FROM employee"; {
        connection.query(query, function(err,res) {
            if (err) throw err;
            console.tables(res);
            promptUser();
        });
    }
}

  function AddDepartment() {
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
    inquirer.prompt([ {
        type: "input",
        message: "What is name of role?",
        name: "Role"
    },
    {
        type: "input",
        message: "What is role salary?",
        name: "roleSalary"
    },
    {
        input: "type",
        message:"What department id number?",
        name: "roleDept"
    }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", 
        [answer.Role, answer.roleSalary, answer.roleDept], function(err, res) {
            if (err) throw err;
            console.table(res);
            promptUser();
        });
      });
    }

  function AddEmployee() {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is employees first name?",
            name: "empFirst"
        },
        {
            type: "input",
            message: "What is employees last name?",
            name: "empLast"
        },
        {
            type: "input",
            message: "What is employees role id number?",
            name: "empRoleID"
        },
        {
            type: "input",
            message: "What is manager id number?",
            name: "empMgrID"
        }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", 
        [answer.empFirst, answer.empLast, answer.empRoleID, answer.empMgrID], function(err, res){
            if(err) throw err;
            console.table(res);
            promptUser();
        });
      });
    }
    function UpdateEmployeeRole() {
        inquirer.prompt([
            {
                type: "input",
                message: "Which employee are you updating?",
                name: "empUpdate"
            },
            {
                type: "input",
                message: "Updating role to...",
                name: "empRoleUpdate"
            }
        ])
        .then(function(answer) {
            connection.query('UPDATE employee SET role_id =? WHERE first_name = ?',
            [answer.empUpdate, answer.EmpRoleUpdate], function (err, res){
                if (err) throw err;
                console.table(res);
                promptUser();
            });
        });
    }

    function Quit() {
        connection.end();
        process.exit();
    }