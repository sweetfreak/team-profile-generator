const Engineer =require("../lib/Engineer.js");


test("engineer has fields in it", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
})