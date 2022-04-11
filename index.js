// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },

        {
            type: 'input',
            message: 'What is a description of your project?',
            name: 'description'
        },

        {
            type: 'input',
            message: 'What command will install dependencies?',
            name: 'install'
        },

        {
            type: 'input',
            message: 'How would someone use this project?',
            name: 'usage'
        },

        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributors'
        },

        {
            type: 'input',
            message: 'How do you test this project?',
            name: 'test'
        },

        {
            type: 'list',
            message: 'Choose a lisence for your application',
            name: 'license',
            choices: [
                { name: 'MIT', value: 'MIT' },
                { name: 'GNU', value: 'GNU' },
                { name: 'Apache', value: 'APACHE' },
                { name: 'MPL', value: 'MPL' }
            ]
        },

        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'username'
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
    ]).then(
        function getAnswers({
            title,
            description,
            install,
            usage,
            contributors,
            test,
            license,
            username,
            email

        }) {

            const template =
                `# ${title}
![](https://img.shields.io/badge/License-${license}-white.svg)

## Table of Contents
1. [Description](#description)
2. [Install](#install)
3. [Usage](#usage)
4. [Visuals](#visuals)
5. [Contributions](#contributions)
6. [Tests](#tests)
7. [License](#license)
8. [Contact](#contact)

---
## Description
${description}

---
## Installation
${install}

---
## Usage
${usage}

---
## Visuals
![Demo Link](http://youtube.com)

---
## License
${license}

---
## Contrbutions
${contributors}

---
## Tests
${test}

---
## Contact
For any questions, contact me at: 
[github link](https://www.github.com/${username})
email: 
${email}`;


            createNewFile(template);
        });

    function createNewFile(template) {
        fs.writeFile('./dist/README.md', template, (err) => {
            err ? console.error(err) : console.log('README.md created!')
        });
    }
}

// Function call to initialize app
init();
