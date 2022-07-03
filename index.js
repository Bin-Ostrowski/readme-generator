// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//create an array of questions fo user input
const promptUser = questions => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
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
            name: 'projectDescription',
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
            name: 'tableOfContents',
            message: 'What are the table of contents? (Required)',
            //how do I do this one?
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the table of contents!");
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
            type: 'checkbox',
            name: 'license',
            message: 'What license does your project have? (Check all that apply)',
            choices: ['Opensource', 'other', 'other2']
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
            name: 'questions',
            message: 'Please list an email questions can be directed to. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list an email!");
                    return false;
                }
            }
        },
    ])
    // .then(questions => {
    //     return questions
    //     console.log()
    // });
};

promptUser()
    .then(questions =>{
        console.log(questions);
    });
//   .then(promptProject)
//   .then(portfolioData => {
//     //   const pageHTML = generatePage(portfolioData);
      
//     //   fs.writeFile('./index.html', pageHTML, err => {
//     //       if (err) throw new Error(err);

//     //       console.log('Page created! Check out index.html in this directory to see it!');
//         });
//   });
  


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
