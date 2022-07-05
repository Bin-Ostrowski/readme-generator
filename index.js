// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path')
const generatePage = require('./src/generateMarkdown.js');
// const { filter } = require('rxjs');
// const generateMarkdown =  require('./src/generateMarkdown')

//create an array of questions fo user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your project's title!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the what, why, and how of your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please describe what your project does!");
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please describe how to install your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please describe how to use your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe how to contribute to your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please list who contributed to this project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests for your application? Provide examples on how to run them. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please describe a test for your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username where questions can be directed to. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please list your GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email where questions can be directed to. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please list an email!");
                return false;
            }
        }
    },
    { //make an if statement around option to have license or not
        type: 'list',
        name: 'license',
        message: 'What license does your project have? (Check ONE)',
        choices: ['BDS', 'MIT', 'GNUPLv3', 'no license'],
    },
    
];

//function to initialize app
function runQuestions() {
    return inquirer.prompt(questions)
    .then((answers)=>{

        //function to write README file
        const readmePage = generatePage(answers);
        fs.writeFile('./README.md', readmePage, err => {
            if(err) throw new Error(err);
            console.log('Page created! Check out README.md in this directory to see it!')
        }) 
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
};

// Function call to initialize app
runQuestions();


// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

// // TODO: Create a function to initialize app
// function init() { 
//     inquirer.prompt(questions).then(res => writeToFile("README.md", generateMarkdown(res) ))
// }

// // Function call to initialize app
// init();