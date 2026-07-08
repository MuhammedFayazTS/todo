import { it } from "vitest";
import { describe } from "vitest";
import { add } from "../../utils/math";
import { expect } from "vitest";

describe("Math Utils", () => {
    it("Should add two numbers correctly", () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });
});