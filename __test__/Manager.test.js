const Manager = require("../lib/Manager");

// Testing the constructor
test("Sets the manager's office number using the constructor", () => {
  const employee = new Manager(
    "John",
    "1",
    "someone@example.com",
    "4044043000"
  );
  expect(employee.officeNumber).toBe("4044043000");
});

// Testing the office number method
test("Sets the office number using the getOfficeNumber method", () => {
  const employee = new Manager(
    "John",
    "1",
    "someone@example.com",
    "4044043000"
  );
  expect(employee.getOfficeNumber()).toBe("4044043000");
});

test("Get the employee role using the getRole method", () => {
  const employee = new Manager(
    "John",
    "1",
    "someone@example.com",
    "4044043000"
  );
  expect(employee.getRole()).toBe("Manager");
});

test("Get the employee id from the getId method using the employee super constructor", () => {
  const employee = new Manager(
    "John",
    "1",
    "someone@example.com",
    "4044043000"
  );
  expect(employee.getId()).toBe("1");
});
