const generateReadme = answers => {
return`
# ${answers.title}
        
## Description
${answers.description}
        
//fix table of content to input from answers
## Table of Content
- [project description] (#Description)
- [Usage] (#contributing )

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
[GitHub: ${answers.github}](https://github.com/${answers.github})

${answers.email}

Please email the above email with any additional questions. 
` ;
};

module.exports = generateReadme;