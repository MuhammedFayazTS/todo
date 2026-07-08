import { it, describe, expect } from "vitest";
import request from "supertest";
import app from "../../app";

describe("GET health check", () => {
  it("should return success", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Welcome to the Todo API" });
  });
});
