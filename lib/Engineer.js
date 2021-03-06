// require Employee before 
const Employee = require("./Employee");

//Engineer is built from Employee 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer