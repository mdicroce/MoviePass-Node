const Person = require('../models/Person')
const Blog = require('../models/Blog')
const { blogs } = require('./dummy.test')

const initialPersons = [
  {
    name: 'Moira Gregorini',
    number: '223-3333-333'
  },
  {
    name: 'mairo gragorini',
    number: '333-222-1111'
  }
]

const nonExistinId = async () => {
  const person = new Person({ name: 'will remove this soon', number: '222222-222' })
  await person.save()
  await person.remove()

  return person._id.toString()
}
const nonExistinIdB = async () => {
  const blog = new Blog({ title: 'voy', author: 'a', url: 'Borrar Esto', likes: 123 })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}
const blogsInDb = async () => {
  const blog = await Blog.find({})
  return blog.map(b => b.toJSON())
}
const personsInDb = async () => {
  const person = await Person.find({})
  return person.map(p => p.toJSON())
}

module.exports = { initialPersons, nonExistinId, personsInDb, blogs, nonExistinIdB, blogsInDb }
