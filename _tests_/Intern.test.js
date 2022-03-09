const Intern = require('../lib/Intern');

test('creates Intern?', () => {
    const intern = new Intern('Sarah', 20, 'sarahlloyd@gmail.com', 'The Meadows');
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets school?', () => {
    const intern = new Intern('Sarah', 20, 'sarahlloyd@gmail.com', 'The Meadows');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets intern role?', () => {
    const intern = new Intern('Sarah', 20, 'sarahlloyd@gmail.com', 'The Meadows');
    expect(intern.getRole()).toEqual("Intern");
}); 