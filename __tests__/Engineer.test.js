const Engineer =require("../lib/Engineer.js");

//jest.mock("../lib/Engineer");


test("engineer has fields in it", () => {
    const engineer = new Engineer("", "", "", "sweetfreak");


    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
})

test("engineer has github field", () => {
    const engineer = new Engineer("", "", "", "sweetfreak");

    expect(engineer.getGithub()).toEqual(expect.stringContaining("sweetfreak"));

})