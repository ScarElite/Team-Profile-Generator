const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/page-template");

// Require Objects
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffice
      );
      teamData.push(manager);
    })
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
        let generatedHTML = generateHTML(teamData);
        writeFile(generatedHTML);
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
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGitHub
      );
      teamData.push(engineer);
    })
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
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamData.push(intern);
    })
    .then(function () {
      addTeamMember();
    });
}

const writeFile = (generateHTML) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", generateHTML, (err) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve({
          ok: true,
          message: "File Created!",
        });
      }
    });
  });
};

createTeam();
