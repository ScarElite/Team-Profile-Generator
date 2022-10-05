const createTeam = (team) => {
  // Generate the Manager Card(s)
  const generateManager = (manager) => {
    return `
    <!-- The Manager -->
    <div class="is-justify-content-center mt-4" style="display: flex;">
        <div class="card my-4" style="width: 300px;">
            <div class="card-header has-background-info is-flex-direction-column py-3">
                <h3 class="card-header-title has-text-white py-2 is-size-4">${manager.getName()}</h3>
                <h4 class="card-header-title has-text-white py-2 is-size-5"><i class="fa-solid fa-mug-hot mr-2"></i> ${manager.getRole()}</h4>
            </div>
              <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1 py-2">Employee ID: ${manager.getId()}</h5>
                <h5 class="my-1 py-2">Office Phone Number: ${manager.getOfficeNumber()}</h5>
                <h5 class="my-1 py-2">Email: <a>${manager.getEmail()}</a></h5>
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
    <div class="is-justify-content-center mt-4" style="display: flex;">
        <div class="card my-4" style="width: 300px;">
          <div class="card-header has-background-info is-flex-direction-column py-3">
                <h3 class="card-header-title has-text-white py-2 is-size-4">${engineer.getName()}</h3>
                <h4 class="card-header-title has-text-white py-2 is-size-5"><i class="fa-solid fa-glasses mr-2"></i> ${engineer.getRole()}</h4>
            </div>
              <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1 py-2">Employee ID: ${engineer.getId()}</h5>
                <h5 class="my-1 py-2">Email: <a>${engineer.getEmail()}</a></h5>
                <h5 class="my-1 py-2">GitHub: <a>${engineer.getGitHub()}</a></h5>
              </div>
          </div>
        </div>
    </div>
  `;
  };

  // Generate the Intern Card(s)
  const generateIntern = (intern) => {
    return `
    <!-- The Intern(s) -->
    <div class="is-justify-content-center mt-4" style="display: flex;">
        <div class="card my-4" style="width: 300px;">
            <div class="card-header has-background-info is-flex-direction-column py-3">
                <h3 class="card-header-title has-text-white py-2 is-size-4">${intern.getName()}</h3>
                <h4 class="card-header-title has-text-white py-2 is-size-5"><i class="fa-solid fa-user-graduate mr-2"></i> ${intern.getRole()}</h4>
            </div>
              <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1 py-2">Employee ID: ${intern.getId()}</h5>
                <h5 class="my-1 py-2">School: ${intern.getSchool()}</h5>
                <h5 class="my-1 py-2">Email: <a>${intern.getEmail()}</a></h5>
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

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>

    <!-- Bulma CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css"/>

    <title>Team Profile Generator</title>
</head>

<body>

    <nav class="navbar has-background-danger is-justify-content-center">
        <h1 class="has-text-white has-text-centered is-size-1 py-3 has-text-weight-bold">My Team!</h1>
    </nav>

    <div class="is-justify-content-space-evenly" style="display: flex; flex-wrap: wrap;">
    
    ${createTeam(team)}

    </div>
    
</body>
</html>
  `;
};
