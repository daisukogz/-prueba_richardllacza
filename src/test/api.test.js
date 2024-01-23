const request = require('supertest')
const app = require("../app")

describe('Test suit', () => {
    it('test /people', async() => {
        const response = await request(app).get("/api/people/1");
        expect(response.statusCode).toBe(200);
    })
})