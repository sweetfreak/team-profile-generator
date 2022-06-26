//const employees = require('../index.js');

const specificRoleQuestion = (person) => {
        let specificRole = "employee"
        if (person.getRole() === 'Manager') {
            specificRole = `Office Number: ${person.officeNumber}`
        } else if (person.getRole() === 'Engineer') {
            specificRole = `Github: <a href = "https://github.com/${person.github}" target="_blank" rel="noopener noreferrer"> ${person.github} </a>`
        } else {
            specificRole = `School: ${person.school}`
        }
        return specificRole;
    ;
}

const generateEmployees = (employeeArr) => {

    let pageHTML = "";
    
    for (let i = 0; i < employeeArr.length; i++) {

        

       pageHTML = pageHTML + `
        <div class = "text-center border border-dark">
        <div><h2>${employeeArr[i].getRole()}</h2></div>
        <div><h3>Name: ${employeeArr[i].getName()}</div>
        <div>Employee ID: ${employeeArr[i].getID()}</div>
        <div>Email: <a href= "mailto:${employeeArr[i].getEmail()}"> ${employeeArr[i].getEmail()} </a></div>
        <div>${specificRoleQuestion(employeeArr[i])}</div>
        </h3>
        </div>
         `;
    }
    return pageHTML;

}


const createTemplate = employeeArr => {

   // const { } = templateData;


   console.log(
    `==================================
Your Team Page has now been created
==================================`
   )
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Your Team Info</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    </head>

<header class = " text-center">
    <h1> Your Team</h1>
</header>
<main class='flex'>
${generateEmployees(employeeArr)}
</main>
   
`
};

module.exports = createTemplate;



