const message = require('../src/hello-world');

test('prints Hello World! message', () =>{
    expect(message()).toBe("Hello World!")
});