const { answers } = require('../index');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return `[License](https://choosealicense.com/licenses/${license}/)`;
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `
        ## License
        
        This project is licensed underthe [${license} License](https://choosealicense.com/licenses/${license}/)`
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
    const licenseSection = renderLicenseSection(data.license);
    
  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${answers.description}
  
  ## Table of Contents
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

  
  ## Contributing
  ${answers.contribution}


  ## Testing
  ${answers.tests}


  ${licenseSection}


  ## Contact
  GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  Email: ${answers.email}
  `;
}

module.exports = generateMarkdown;
