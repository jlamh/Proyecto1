const request = require('supertest');
const express = require('express');
const app = require('../server');

describe('API Tests', () => {
    it('GET /home - Obtener elementos', async () => {
        const res = await request(app).get('/home');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('items');
    });

    it('POST /home - Agregar un elemento', async () => {
        const res = await request(app).post('/home').send({ item: 'Nuevo Item' });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('message', 'Item added');
    });

    it('POST /home - Error si no se envía item', async () => {
        const res = await request(app).post('/home').send({});
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', 'Item is required');
    });
});
