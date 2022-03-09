// Constants
const generateHTML = require('./src/HTMLgenerator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');
const teamMembers = []; 

const addEmployee = () => {
    console.log(`
    ==============================================
    Click on a role to add an employee to the team
    ===============================================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose a role",
            choices: ['Engineer', 'Intern', 'Manager',]
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter an employee ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID (must be a number)!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = email.includes('@')
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Must specify a github username!")
                }
            }
        },

        {
            type: 'input',
            name: 'officeNo',
            message: "Please enter the manager's office number.",
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Manager's office number.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please specify the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the name of a school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])

    .then(employeeData => {
        let {role, name, id, email,  github, school, officeNo, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        }

            if (role === "Manager") {
                employee = new Manager (name, id, email, officeNo);
    
                console.log(employee);
        }

         if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }
    
    teamMembers.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamMembers); 
            
        } else {
            return teamMembers;
        }
    })

};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been successfully created!")
        }
    })
}; 

addEmployee()
  .then(teamMembers => {
    return generateHTML(teamMembers);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });