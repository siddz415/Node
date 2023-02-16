// TODO: Include packages needed for this application
// require inquirer, fs and path
// require generateMarkdown.js

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./Develop/utils/generateMarkdown");
console.log('welcome to my Readme Generator')

// TODO: Create an array of questions for user input
// if you want user to supply the answer use type: 'input'
// if you want a list of answers, use type: "list"
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using?",
        choices: ["none", "apache", "opengl"]
    },
    {
        type: "input",
        name: "description",
        message: "What is you project about? give a brief description of your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Which dependencies did you use?"
    },
    {
        type: "input",
        name: "tests",
        message: "What commands did you use to test this app?"
    },
    {
        type: "input",
        name: "credits",
        message: "Enter your Github Username?"
    },
    {
        type: "input",
        name: "credits",
        message: "Enter your email?"
    },
    {
        type: "input",
        name: "contributor",
        message: "How many people working on this project?"
    },
];
/*inquirer.prompt(questions)
    .then((response) => {
        fs.writeFile('README.md', generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    }); */

// an array of objects used by inq to fill out the readme

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }
// write to file testReadme.md

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            fs.writeFile('README.md', generateMarkdown(answers), (err) =>
                err ? console.error(err) : console.log('Success!')
            );

        })

}
// start the inquirer prompt and run the generateMarkdown function

// Function call to initialize app
init();
