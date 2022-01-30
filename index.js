//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

//Generated questions

inquirer
  .prompt([
    {
      type: "input",
      messege: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a brief description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Contents (Optional)",
      name: "contents",
    },
    {
      type: "input",
      message: "How to run and install the project",
      name: "installation",
    },
    {
      type: "input",
      message: "How to use the project",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter contribution guidlines for your project",
      name: "contribution",
    },
    {
      type: "input",
      message: "Enter GitHub username",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your contant email",
      name: "email",
    },
    {
      type: "list",
      message: "What licenses does your project require?",
      name: "licences",
      choices: ["MIT", "Apache", "Academic", "GNU", "ISC", "Mozilla", "None"],
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)

  });