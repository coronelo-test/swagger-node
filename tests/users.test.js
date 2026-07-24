const request = require("supertest");
const app = require("./../index");

describe("GET /api/v1/users", () => {
  it("should return a list of users and a 200 status code", async () => {
    const response = await request(app).get("/api/v1/users");

    expect(response.statusCode).toBe(200);
    /*const toCompare = [
      {
        id: 1,
        name: "Alice",
      },
      {
        id: 2,
        name: "Bob",
      },
    ];*/
    const toCompare = [
      {
        id: 1,
        name: "Alice",
      },
    ];
    expect(response.body).toEqual(toCompare);
  });
});
