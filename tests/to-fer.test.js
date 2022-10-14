const toFer = require('../src/to-fer');

test("returns testing to-fer",()=>{
    expect(toFer()).toBe("One for you, one for me.")
});
test("returns testing to-fer",()=>{
    expect(toFer("Alice")).toBe("One for Alice, one for me.")
});
test("returns testing to-fer",()=>{
    expect(toFer("Bob")).toBe("One for Bob, one for me.")
});
test("returns testing to-fer",()=>{
    expect(toFer("Zaphod")).toBe("One for Zaphod, one for me.")
});