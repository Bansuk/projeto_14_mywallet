import supertest from "supertest";
import app from "../backend/app.js";
import connection from "../database/database.js";

const testUser = {
    account_id: 8,
    token: "Bearer f66679f3-e646-4aa4-9c68-8434da2e69ed",
};

describe("GET /TRANSACTIONS", () => {
    beforeAll(async () => {
        await connection.query(
            `INSERT INTO transaction (date, description, value, account_id) VALUES (CURRENT_DATE, 'test', 100, ${testUser.account_id});`
        );
    });

    afterEach(async () => {
        await connection.query("DELETE FROM transaction;");
    });

    test("return 200 with transactions", async () => {
        const result = await supertest(app)
            .get("/transactions")
            .set("Authorization", testUser.token);
        expect(result.status).toEqual(200);
    });

    test("return 204 for unavailable transactions", async () => {
        const result = await supertest(app)
            .get("/transactions")
            .set("Authorization", testUser.token);
        expect(result.status).toEqual(204);
    });

    test("return 401 for undefined token", async () => {
        const result = await supertest(app).get("/transactions");
        expect(result.status).toEqual(401);
    });

    test("return 403 for invalid token", async () => {
        const result = await supertest(app)
            .get("/transactions")
            .set("Authorization", "Bearer f66679f3-e646-4aa4-9c68");
        expect(result.status).toEqual(403);
    });
});
