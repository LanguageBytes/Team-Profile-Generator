const Employee = require('../lib/Employee');

test('Employee created?', () => {
    const employee = new Employee('Sarah', 20, 'sarahlloyd@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Name received?', () => {
    const employee = new Employee('Sarah', 20, 'sarahlloyd@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});


test('Gets employee ID?', () => {
    const employee = new Employee('Sarah', 20, 'sarahlloyd@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});


test('Gets employee email?', () => {
    const employee = new Employee('Sarah', 20, 'sarahlloyd@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});


test('Gets role of employee?', () => {
    const employee = new Employee('Sarah', 20, 'sarahlloyd@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 