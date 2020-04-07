import request from 'supertest';

import app from '../../src/app';

describe('Create user endpoint', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'userteste',
        email: 'userteste@fastfeet.com',
        password: '123456',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      email: 'userteste@fastfeet.com',
      id: 1,
      name: 'userteste',
    });
  });
  it('should emit a validation error', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        email: 'userteste@fastfeet.com',
        password: '123456',
      });
    expect(res.statusCode).toEqual(400);
  });
  it('should emit user already exists error', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'userteste',
        email: 'userteste@fastfeet.com',
        password: '123456',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: 'User already exists',
    });
  });
});
