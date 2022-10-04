const inquirer = require("inquirer");
const fs = require("fs");

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
        createEngineer();
      } else if (choice.pickMember === "Intern") {
        createIntern();
      } else if (choice.pickMember === "No more employees") {
        console.log("Your team has been created!");
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of your engineer?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is your engineer's GitHub username?",
      },
    ])
    .then(function () {
      addTeamMember();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of your intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
      },
    ])
    .then(function () {
      addTeamMember();
    });
}

createTeam();
