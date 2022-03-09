const Engineer = require('../lib/Engineer');

test('Engineer created?', () => {
    const engineer = new Engineer('Sarah', 20, 'sarahlloyd@gmail.com', 'LanguageBytes');
    expect(engineer.github) .toEqual(expect.any(String));
});

test('Gets Github username?', () => {
    const engineer = new Engineer('Sarah', 20, 'sarahlloyd@gmail.com', 'LanguageBytes')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Gets Engineer role?', () => {
    const engineer = new Engineer('Sarah', 20, 'sarahlloyd@gmail.com', 'LanguageBytes');
    expect(engineer.getRole()).toEqual("Engineer");
});