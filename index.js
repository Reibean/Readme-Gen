// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Other'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'GitHub username',
        message: 'Enter your github username:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file generated successfully.');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = `
            # ${answers.title}
            
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

            ## License
            This project is licensed under the ${answers.license} License.
            
            ## Contributing
            ${answers.contribution}

            ## Testing
            ${answers.tests}
            
            ## Contact
            GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
            Email: ${answers.email}
            `;
            writeToFile('README.md', readmeContent);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
