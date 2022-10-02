const Engineer = require("../lib/Engineer");

// Testing the constructor
test("Sets GitHub using the constructor", () => {
  const employee = new Engineer("John", "1", "someone@example.com", "JohnDoe");
  expect(employee.github).toBe("JohnDoe");
});

// Testing the github method
test("Sets the GitHub using the getGitHub method", () => {
  const employee = new Engineer("John", "1", "someone@example.com", "JohnDoe");
  expect(employee.getGitHub()).toBe("JohnDoe");
});

test("Gets the employee's role using the getRole method", () => {
  const employee = new Engineer("John", "1", "someone@example.com", "JohnDoe");
  expect(employee.getRole()).toBe("Engineer");
});
