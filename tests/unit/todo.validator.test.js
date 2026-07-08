import { it, describe, expect } from "vitest";
import { validateCreateTodo } from "../../src/utils/validators/todo.validator";

describe("Todo Validators", () => {
  it("Should validate create todo input correctly", () => {
    const { isValid, message, data } = validateCreateTodo({
      title: "Test Todo",
      description: "This is a test todo",
    });
    expect(isValid).toBe(true);
    expect(message).toBeUndefined();
    expect(data).toEqual({
      title: "Test Todo",
      description: "This is a test todo",
    });
  });

  it("Should return an error if title is missing", () => {
    const { isValid, message } = validateCreateTodo({
      description: "This is a test todo",
    });
    expect(isValid).toBe(false);
    expect(message).toBe("Title and description are required");
  });

  it("Should return an error if description is missing", () => {
    const { isValid, message } = validateCreateTodo({ title: "Test Todo" });
    expect(isValid).toBe(false);
    expect(message).toBe("Title and description are required");
  });

  it("Should not return data if title or description is missing", () => {
    const { isValid, message, data } = validateCreateTodo({});
    expect(data).toBeUndefined();
  });
});
