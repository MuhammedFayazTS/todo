import { request } from "express";
import { it, describe, expect } from "vitest";
import app from "../../app";

describe("GET health check", () => {
  it("should return success", async () => {
    const response = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Welcome to the Todo API" });
  });
});
