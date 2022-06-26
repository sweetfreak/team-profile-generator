const Manager =require("../lib/Manager.js");

//jest.mock("../lib/Manager");


test("manager has fields in it", () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
})

test("Manager has office number", () => {
    const manager = new Manager("", "", "", "offnumb");


    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining("offnumb"));
})