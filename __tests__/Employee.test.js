const Employee =require("../lib/Employee.js");


test("employee has fields in it", () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});