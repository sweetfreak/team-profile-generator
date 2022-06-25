const Intern =require("../lib/Intern.js");


test("Intern has fields in it", () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
})