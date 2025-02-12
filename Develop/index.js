// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = ["What is the name you would like to attach to this project?", "How would someone contact you if they have question, comments, etc.?", "What is the title of the project?", "What is the project for?", "How would someone install this project?", "How is this project used once installed?", "What is the license you're using?", "What's the link to that License"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log("README generated"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            name: "name",
            message: questions[0]
        },
        {
            name: "contact",
            message: questions[1]
        },
        {
            name: "title",
            message: questions[2]
        },
        {
            name: "description",
            message: questions[3]
        },
        {
            name: "installation",
            message: questions[4]
        },
        {
            name: "usage",
            message: questions[5]
        },
        {
            name: "license",
            message: questions[6]
        },
        {
            name: "link",
            message: questions[7]
        }

    ]).then((response) => 
        {
            const data = 
            {
                name: response.name,
                contact: response.contact,
                title: response.title,
                description: response.description,
                installation: response.installation,
                usage: response.usage,
                license:
                {
                    name: response.license,
                    link: response.link
                }
            }
            console.log(data)
            writeToFile("README.md", generateMarkdown(data))
        })
}

// Function call to initialize app
init();
