const generateReadme = answers => {
return`
# ${answers.title}
        
## Description
${answers.description}
        
//fix table of content to input from answers
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
${answers.license}

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