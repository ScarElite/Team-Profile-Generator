const Employee = require("../lib/Employee");

// Testing the constructors
test("return employee's name", () => {
  const employee = new Employee("John");
  expect(employee.name).toBe("John");
});

test("return employee's id", () => {
  const employee = new Employee("John", "1");
  expect(employee.id).toBe("1");
});

test("return employee's email", () => {
  const employee = new Employee("John", "1", "someone@example.com");
  expect(employee.email).toBe("someone@example.com");
});

test("return employee's role", () => {
  const employee = new Employee("John", "1", "someone@example.com", "employee");
  expect(employee.role).toBe("employee");
});

// Testing the methods
test("return employee's name using the getName method", () => {
  const employee = new Employee("John");
  expect(employee.name).toBe("John");
});

test("return employee's id using the getId method", () => {
  const employee = new Employee("John", "1");
  expect(employee.id).toBe("1");
});

test("return employee's email using the getEmail method", () => {
  const employee = new Employee("John", "1", "someone@example.com");
  expect(employee.email).toBe("someone@example.com");
});

test("return employee's role using the getRole method", () => {
  const employee = new Employee("John", "1", "someone@example.com", "employee");
  expect(employee.role).toBe("employee");
});
