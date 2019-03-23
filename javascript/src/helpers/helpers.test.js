const isRequired = require("./helpers");

test("it should throw an Exception with parameter name if specified", () => {
  expect(isRequired).toThrowError("param is required!");
});