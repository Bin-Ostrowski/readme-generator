// function renderLicenseBadge(license) {
//     //change this to a filter function to grab whatever lisence they chose. (are common BSD, MIT, GPL)
//     const badges = {
//         bds: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
//         mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//         gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//     }
//     const result = badges.filter(badges, license) => {
//         return result
//     }
//     return 
//   }
  
//   function renderLicenseLink(license) {
//     const licenseLinks = {
//         bds: 'https://choosealicense.com/licenses/bsd-2-clause/',
//         mit: 'https://choosealicense.com/licenses/mit/',
//         gnuplv3: 'https://choosealicense.com/licenses/gpl-3.0/'
//     }
//   }

//   function renderLicenseSection(license){
//     if (license) {

//     } else {
//         return ('');
//     }
// }

function generateReadme(answers) {
return `# ${answers.title} //license badge here
        
## Description
${answers.description}
        
## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license} // this needs to have if statment. 

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
GitHub: [${answers.github}](https://github.com/${answers.github})

Email: ${answers.email}

Please send any additional questions to the email listed above. 
` ;
};

module.exports = generateReadme;