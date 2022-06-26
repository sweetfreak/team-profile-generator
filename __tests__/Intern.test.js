const Intern =require("../lib/Intern.js");

//jest.mock("../lib/Intern");


test("Intern has fields in it", () => {
    const intern = new Intern("", "", "", "school");


    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
})
test("Intern has school", () => {
    const intern = new Intern("", "", "", "school");


    expect(intern.getSchool()).toEqual(expect.stringContaining("school"));
})