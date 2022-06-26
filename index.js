const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const filePath =("./dist/index.html")

const employees = module.exports = [];

const generateTeamPage = require("./src/pagetemplate.js");



//
//this function executes when the program starts - node index.js
const startTeamCreator = () => {
    console.log("Hello, Team Manager. Let's begin.");
    getManager();
}

//asks manager questions
const getManager = () => {
     inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name for the Manager position:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter your employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID number.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                    //if time: add if statement for including @ symbol
                } else {
                    console.log("Please enter your email address.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number:",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Enter your office number.");
                    return false;
                }
            }
        }
    ]) 
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager)
        console.log("Great! Now, add your team.");
        getEmployee();
        
    });
};
//adds employees
const getEmployee = () => {

    inquirer.prompt([
        {
    type: "confirm",
    name: "addEmployee",
    message: "Type 'y' to add another employee:",
    default: false
    
    }])
    .then((answer) => {
    if (answer.addEmployee) {

        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Select an employee role:",
                choices: ["Intern","Engineer"],
                validate: typeInput => {
                    if (typeInput) {
                        return true;
                    } else {
                        console.log("Please choose an employee type.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "name",
                message: "Enter the employee's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Enter their employee ID:",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter your employee ID number.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the employee's email address:",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                        //if time: add if statement for including @ symbol
                    } else {
                        console.log("Enter the employee's email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the engineer's Github username:",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Enter the engineer's Github username.");
                        return false;
                    }
                },
                when: function(answer) {
                    return answer.role === "Engineer"
                }
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school:",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Enter the intern's school.");
                        return false;
                    }
                },
                when: function(answer) {
                    return answer.role === "Intern"
                }
            } 

        ])
        .then((answers) => {
            if (answers.role === "Engineer") {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                employees.push(engineer)
            } else {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                employees.push(intern)
            }
            getEmployee();
        });   
    } else {
        console.log("Generating team page with following employees:");
        console.info(employees); 
        writeFile(employees)
    }
    

    })
};



//writes content to file.
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        //please note, there MUST be an index.html file already included
      fs.writeFile('./dist/index.html', generateTeamPage(fileContent), err => {
        //if there's an error, reject the Promise and send the error to the Promise's ".catch()" method
        if (err) {
          reject(err);
          //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
      }
  
      //if everything went well, resolve the Promise and send the successful data to the ".then()" method
        resolve({
          ok: true,
          message: 'Team Page created!'
        });
      });
    });
  };





     startTeamCreator()
     
   
    module.exports = employees;