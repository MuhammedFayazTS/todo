import { it, describe, expect } from "vitest";
import { add } from "../../src/utils/math";

describe("Math Utils", () => {
  it("Should add two numbers correctly", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
