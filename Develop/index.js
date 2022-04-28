// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for this project?'
    },
    {   type: 'input',
        name: 'descOver',
        message: 'What does your project do?'
    },
    {
        type: 'input',
        name: 'descMot',
        message: 'Why did you develop this project?'
    },
    {
        type: 'input',
        name: 'descLearn',
        message: 'What did you learn in this process?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do I install this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do I use this project?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for this project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'With whom did you collaborate on this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for your project?',
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU (GPL) 2.0',
            'GNU (GPL) 3.0',
            'BSD 2.0',
            'ISC',
            'Artistic 2.0',
            'Perl',
            'Boost',
            'Mozilla',
        ],
    },
    {
        type: 'input',
        name: 'developer',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your username?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'liveURL',
        message: 'What is the URL for your project?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the GitHub repository URL for your project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
