const renderLicenseBadge = license => { //change this to a filter function to grab whatever lisence they chose. (are common BSD, MIT, GPL)
  const badges = {
      bds: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  return badges[license];
}

const renderLicenseLink = license => {
  const licenseLinks = {
      bds: 'https://choosealicense.com/licenses/bsd-2-clause/',
      mit: 'https://choosealicense.com/licenses/mit/',
      gnuplv3: 'https://choosealicense.com/licenses/gpl-3.0/'
  }
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
