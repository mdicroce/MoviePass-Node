const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Person = require('../models/Person');
const {initialPersons, nonExistinId, personsInDb} = require('./test_helper');

const api = supertest(app)

beforeEach(async () => {
  await Person.deleteMany({})

  for(let person of initialPersons)
  {
      let personObject = new Person(person);
      await personObject.save();
  }
})
test('persons are returned as json', async () => {
  await api
    .get('/api/persons')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('all persons are returned', async () => {
  const response = await personsInDb();
  expect(response).toHaveLength(initialPersons.length);
})

test('a specific person is within the returned persons', async()=>{
    const response = await personsInDb()
    const name = response.map(r => r.name);
expect(name).toContain(
    'Moira Gregorini'
  )

})
test('persons without a name is not added', async()=>{
    const newPerson = {
        number: "123456789"
    };
    await api
    .post('/api/persons')
    .send(newPerson)
    .expect(400)

    const response = await personsInDb();
    expect(response).toHaveLength(initialPersons.length);
})

afterAll(() => {
    mongoose.connection.close();
})