// Generate the Manager Card(s)
const generateManager = (manager) => {
  return `
    <div class="is-justify-content-center mt-4" style="display: flex;">
        <div class="card" style="max-width: 300px;">
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
  <div class="card my-4" style="max-width: 300px;">
            <div class="card-header has-background-grey-light is-flex-direction-column">
                <h3 class="card-header-title is-justify-content-center">${engineer.getName()}</h3>
                <h4 class="card-header-title is-justify-content-center">Title: ${engineer.getRole()}</h4>
            </div>
            <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1">Employee ID: ${engineer.getId()}</h5>
                <h5 class="my-1">Email: <a>${engineer.getEmail()}</a></h5>
                <h5>GitHub: <a>${engineer.github}</a></h5>
            </div>
        </div>
  `;
};

// Generate the Intern Card(s)
const generateIntern = (intern) => {
  return `
  <div class="card my-4" style="max-width: 300px;">
            <div class="card-header has-background-grey-light is-flex-direction-column">
                <h3 class="card-header-title is-justify-content-center">${intern.getName()}</h3>
                <h4 class="card-header-title is-justify-content-center">Title: ${intern.getRole()}</h4>
            </div>
            <div class="card-content has-background-grey-lighter">
                <div class="card-headers pl-3">
                <h5 class="my-1">Employee ID: ${intern.getId()}</h5>
                <h5 class="my-1">School: ${intern.getSchool()}</h5>
                <h5>Email: <a>${manager.getEmail()}</a></h5>
                </div>
            </div>
        </div>
  `;
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

    <!-- The Manager -->
    <section class="my-4" id="manager-section">
        <h1 class="is-size-3 has-text-weight-bold has-text-centered">The Manager</h1>
        ${generateManager(manager)}
    </section>

    <!-- The Engineer(s) -->
    <section class="my-4" id="engineer-section">
        <h1 class="is-size-3 has-text-weight-bold has-text-centered">The Engineer(s)</h1>
        <div class="is-justify-content-space-evenly" style="display: flex; flex-wrap: wrap;" id="cards">
        ${generateEngineer(engineer)}
        </div>
    </section>

    <!-- The Intern(s) -->
    <section class="my-4" id="intern-section">
        <h1 class="is-size-3 has-text-weight-bold has-text-centered">The Intern(s)</h1>
        <div class="is-justify-content-space-evenly" style="display: flex; flex-wrap: wrap;" id="cards">
        ${generateIntern(intern)}
        </div>
    </section>
    
</body>
</html>
  `;
};