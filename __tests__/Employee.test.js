const Employee =require("../lib/Employee.js");

//jest.mock("../lib/Employee");


test("employee has fields in it", () => {
    const employee = new Employee("Jesse", "123", "email");

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});

test("gets name", () => {
    const employee = new Employee("Jesse", "123", "email");
    expect(employee.getName()).toEqual("Jesse");
});

test("gets id", () => {
    const employee = new Employee("Jesse", "123", "email");
    expect(employee.getID()).toEqual("123");
});

test("gets email", () => {
    const employee = new Employee("Jesse", "123", "email");
    expect(employee.getEmail()).toEqual("email");
});