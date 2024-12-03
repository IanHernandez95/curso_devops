const request = require('supertest');
const app = require('../../src/app');

test('La ruta "/" responde con un mensaje', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('¡Hola, mundo desde Node.js!');
});

test('La ruta "/api" responde con datos de la API externa', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
});
