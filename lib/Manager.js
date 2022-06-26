const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        this.officeNumber = officeNumber;
    }

getOfficeNumber() {
    return this.officeNumber
}


getRole() {
    return `Manager`;
}
    
    // addEmployee() {
    //     console.log("Do you want to add another employee?")
    // }


}

module.exports = Manager;