const request = require('supertest');
const app = require('../index');

describe('GET /api/hello', () => {
  it('responds with JSON containing a greeting message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });
});
