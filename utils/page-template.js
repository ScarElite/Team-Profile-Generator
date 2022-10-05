const createTeam = (team) => {
  // Generate the Manager Card(s)
  const generateManager = (manager) => {
    return `
    <!-- The Manager -->
    <div class="is-justify-content-center mt-4" style="display: flex;">
        <div class="card" style="max-width: 300px; min-width: 300px;">
            <div class="card-header has-background-grey-light is-flex-direction-column">
                <h3 class="card-header-title is-justify-content-center">${manager.getName()}</h3>
                <h4 class="card-header-title is-justify-content-center">Title: ${manager.getRole()}</h4>
            </div>
            <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1">Employee ID: ${manager.getId()}</h5>
                <h5 class="my-1">Office Phone Number: ${manager.getOfficeNumber()}</h5>
                <h5>Email: <a>${manager.getEmail()}</a></h5>
                </div>
            </div>
        </div>
    </div>
    `;
  };

  // Generate the Engineer Card(s)
  const generateEngineer = (engineer) => {
    return `
    <!-- The Engineer(s) -->
    <div class="is-justify-content-space-evenly" style="display: flex; flex-wrap: wrap;" id="cards">
        <div class="card my-4" style="max-width: 300px; min-width: 300px;">
            <div class="card-header has-background-grey-light is-flex-direction-column">
                <h3 class="card-header-title is-justify-content-center">${engineer.getName()}</h3>
                <h4 class="card-header-title is-justify-content-center">Title: ${engineer.getRole()}</h4>
            </div>
            <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1">Employee ID: ${engineer.getId()}</h5>
                <h5 class="my-1">Email: <a>${engineer.getEmail()}</a></h5>
                <h5>GitHub: <a>${engineer.getGitHub()}</a></h5>
            </div>
        </div>
    </div>
  `;
  };

  // Generate the Intern Card(s)
  const generateIntern = (intern) => {
    return `
    <!-- The Intern(s) -->
    <div class="is-justify-content-space-evenly" style="display: flex; flex-wrap: wrap;" id="cards">
        <div class="card my-4" style="max-width: 300px; min-width: 300px;">
            <div class="card-header has-background-grey-light is-flex-direction-column">
                <h3 class="card-header-title is-justify-content-center">${intern.getName()}</h3>
                <h4 class="card-header-title is-justify-content-center">Title: ${intern.getRole()}</h4>
            </div>
            <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1">Employee ID: ${intern.getId()}</h5>
                <h5 class="my-1">School: ${intern.getSchool()}</h5>
                <h5>Email: <a>${intern.getEmail()}</a></h5>
                </div>
            </div>
        </div>
    </div>
  `;
  };

  // create individual cards
  const employeeCards = [];
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join("")
  );
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return employeeCards.join("");
};

// Generate HTML
module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bulma CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css">

    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="navbar has-background-danger is-justify-content-center">
        <h1 class="has-text-white has-text-centered is-size-1 py-3 has-text-weight-bold">My Team!</h1>
    </nav>
    ${createTeam(team)}
    
</body>
</html>
  `;
};
