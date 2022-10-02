const Intern = require("../lib/Intern");

// Testing the constructor
test("Sets school using the constructor", () => {
  const employee = new Intern("John", "1", "someone@example.com", "UNC");
  expect(employee.school).toBe("UNC");
});

// Testing the getSchool method
test("Gets the school from the getSchool method", () => {
  const employee = new Intern("John", "1", "someone@example.com", "UNC");
  expect(employee.getSchool()).toBe("UNC");
});

test("Gets the intern role from the getRole method", () => {
  const employee = new Intern("John", "1", "someone@example.com", "UNC");
  expect(employee.getRole()).toBe("Intern");
});
