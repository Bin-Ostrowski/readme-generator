

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'no license'){
    return '';
  }
  return ` ![License](https://img.shields.io/badge/License-${license}-orange.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'no license'){
    return '';
  }
return '- [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'no license'){
    return '';
  }
  return `## License
 
  This project is licensed under ${license} license.
   `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderLicenseBadge(answers.license)}
        
  ## Description
  ${answers.description}
          
  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
 ${renderLicenseLink(answers.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
 ${renderLicenseSection(answers.license)}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  GitHub: [${answers.github}](https://github.com/${answers.github})
  
  Email: ${answers.email}
  
  Please send any additional questions to the email listed above. 

`;
}

module.exports = generateMarkdown;
