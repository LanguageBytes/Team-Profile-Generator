// require employee
const Employee = require('./Employee');


//Manager is built from Employee
class Manager extends Employee  {
    constructor (name, id, email, officeNo) {
        super (name, id, email); 
        this.officeNo = officeNo; 
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager