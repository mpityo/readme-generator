// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions =() => {
    return inquirer.prompt([
    {
        type: "input", 
        name: "title", 
        message: "What is the title of your project? (Required)",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a title!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project? (Required)",
        validate: (descriptionInput) => {
            if (descriptionInput) {
            return true;
            } else {
            console.log("Please enter a description!");
            return false;
            }
        },
    },
    {
        type: "confirm",
        name: "confirmInstructions",
        message: "Do you want to enter instructions to operate the program? (Y/n)",
        default: true
    },
    {
        type: "input",
        name: "instructions",
        message: "Enter instructions for the user:",
        when: ({ confirmInstructions }) => {
            if (confirmInstructions) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: "confirm",
        name: "confirmUsage",
        message: "Do you want to enter usage information? (Y/n)",
        default: true
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter how users may contribute to the project:",
    },
    {
        type: "input", 
        name: "testing", 
        message: "How many the user test your program? (Required)",
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter an input for testing!");
                return false;
            }
        },
    },
    {
        type: "input", 
        name: "github", 
        message: "What is your GitHub username? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log("Please enter a GitHub username!");
                return false;
            }
        },
    },
  {
      type: "input", 
      name: "email", 
      message: "What is your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
    },
},
]);
}

const dummyInfo = {
    title: "Run Buddy",
    description: "Run as fast as you can",
    instructions: "Here are some instructions for running the program, use it as you wish",
    usage: "Use it as you wish, just don't kill any dwarfs",
    contributing: "Contribute to the program if you want to, but I'm not responsible for any death wishes",
    testing: "Just run it, and don't ask me questions!",
    github: "mpityo",
    email: "mpityo@gmail.com"
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/" + fileName + ".md", data, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => {
        return generateMarkdown(dummyInfo);
    })
    .then((markdownInfo) => {
        return writeToFile("TITLE_README", markdownInfo);
    })
    .then((writeFileResponse) => {
        console.log(writeFileResponse);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
//console.log(generateMarkdown(dummyInfo));