const Manager = require('../lib/Manager');

test('creates Manager with office number?', () => {
    const manager = new Manager('Sarah', 20, 'sarahlloyd@gmail.com', 234);
    expect(manager.officeNo).toEqual(expect.any(Number));
});


test('gets manager role?', () => {
    const manager = new Manager('Sarah', 20, 'sarahlloyd@gmail.com', 234);
    expect(manager.getRole()).toEqual("Manager");
}); 