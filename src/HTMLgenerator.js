

const generateEngineer = function (engineer) {
    return `
        
    <!-- Engineer-->
    <div>
    <div class="card h-100">
        <div class="card-header text-center">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
        </div>

       <div class="card-body">
       <a class="email" href="mailto:${engineer.email}">Email: ${engineer.email}</a>
         <p class="id">ID: ${engineer.id}</p>
         <a href="https://github.com/${engineer.github}" class="github"> Github: ${engineer.github} </a>
      </div>
    </div>
 </div>
    `
}

const generateManager = function (manager) {
    return `
    <!-- Manager -->
    <div>
        <div class="card h-100">
            <div class="card-header text-center">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
  
            <div class="card-body">
            <a class="email" href="mailto:${manager.email}">Email: ${manager.email}</a>
                <p class="id">ID: ${manager.id}</p>
                <p class="officeNo">Office:  ${manager.officeNo}</p>
            </div>
        </div>
     </div>
    `;
}



const generateIntern = function (intern) {
    return `
    <!-- Intern -->
    <div>
    <div class="card h-100">
        <div class="card-header text-center">
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
        </div>

       <div class="card-body">
        <a class="email" href="mailto:${intern.email}">Email: ${intern.email}</a>
         <p class="id">ID: ${intern.id}</p>
         <p class="school">School: ${intern.school}</p>
      </div>
    </div>
 </div>
    `
}

;

generateHTML = (data) => {
    cardsArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            cardsArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            cardsArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            cardsArray.push(internCard);
        }
        
    }

    const employeeCards = cardsArray.join('')
    const generateTeam = generatePage(employeeCards); 
    return generateTeam;

}


const generatePage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Our Team</title>
  
      <!-- Linking Stylesheets -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand text-center mb-0 h1 w-100" id="navbar-text"> Our Team </span>
          </nav>
      </header>
      <main>
      <div class="card-deck justify-content-center" id="team-cards">
                  ${employeeCards}
              </div>
              </div>
     </main> 
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

module.exports = generateHTML; 