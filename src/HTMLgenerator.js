

const generateEngineer = function (engineer) {
    return `
        
    <!-- Engineer-->
    <div>
    <div class="card h-100">
        <div class="card-header text-center">
        <h3>${engineer.name}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width = "40px" height="40px" fill = "white" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="40px" height="40px"  viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"/></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width = "40px" height="40px" fill = "white" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 128h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256C238.3 0 224 14.33 224 32v64C224 113.7 238.3 128 256 128zM528 64H384v48C384 138.5 362.5 160 336 160h-96C213.5 160 192 138.5 192 112V64H48C21.49 64 0 85.49 0 112v352C0 490.5 21.49 512 48 512h480c26.51 0 48-21.49 48-48v-352C576 85.49 554.5 64 528 64zM288 224c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S252.7 224 288 224zM384 448H192c-8.836 0-16-7.164-16-16C176 405.5 197.5 384 224 384h128c26.51 0 48 21.49 48 48C400 440.8 392.8 448 384 448z"/></svg>
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