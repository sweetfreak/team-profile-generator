const Manager =require("../lib/Manager.js");


test("manager has fields in it", () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
})