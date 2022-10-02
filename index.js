const inquirer = require("inquirer");
const fs = require("path");
const { choices } = require("yargs");

const teamData = [];

console.log("Please build your team!");

function createTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the team manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number?",
      },
    ])
    .then(() => {
      addTeamMember();
    });
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "pickMember",
        message: "Which type of member would you like to add?",
        choices: ["Engineer", "Intern", "No more employees"],
      },
    ])
    .then(function (choice) {
      if (choice.pickMember === "Engineer") {
        console.log("Adding an Engineer");
      } else if (choice.pickMember === "Intern") {
        console.log("Adding an Intern");
      } else if (choice.pickMember === "No more employees") {
        console.log("Not adding anymore employees");
      }
    });
}

createTeam();
