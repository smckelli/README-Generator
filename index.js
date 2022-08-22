// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generated = require('./utils/generateMarkdown.js')
// var myLicense;





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
        name: 'credits',
        message: 'With whom did you collaborate on this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use for your project?',
        choices: [
            'None',
            'MIT',
            'Apache 2.0',
            'GNU (GPL) 2.0',
            'GNU (GPL) 3.0',
            'BSD 2.0',
            'ISC',
            'Artistic 2.0',
            'Perl',
            'Boost',
            'Mozilla (MPL)',
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
        message: 'What is your GitHub username?'
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

// console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw err
        console.log('File saved!')
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
    // console.log(answers)
        const data = 
        {
            title: answers.title,
            descOver: answers.descOver,
            descMot: answers.descMot,
            descLearn: answers.descLearn,
            install: answers.install,
            usage: answers.usage,
            credits: answers.credits,
            license: answers.license,
            developer: answers.developer,
            userName: answers.userName,
            userEmail: answers.userEmail,
            liveURL: answers.liveURL,
            repo: answers.repo
        }
    // console.log(data.license)
    const output = generated(data);
    writeToFile('./dist/README.md', output)
    })
}





// Function call to initialize app
init();