const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/Blog');
const {blogs, nonExistinIdB, blogsInDb} = require('./test_helper');

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({});

    for(let aBlog of blogs){
        let newBlog = new Blog(aBlog);
        await newBlog.save();
    }
})

    test ('if get all return as a json', async () =>{
        await api
        .get('/api/blog')
        .expect(200)
    })
    test('when you save a new blog, it appears in the db', async()=>{
        const newBlog = new Blog({ title: "sere eliminado", author: "pronto", url: "https://reactpatterns.com/", likes: 7})
        await newBlog.save();
        const blogsDb = await blogsInDb();
        expect(blogsDb.length).toBe(blogs.length +1);
    })
    test('when passed an object Blog without title, it return error 400', async() => {
        const newBlog = new Blog({url: 'vamos', likes: 123});
        api
        .post('/api/blog')
        .send(newBlog)
        .expect(400)
        
    })
afterAll(() => {
    mongoose.connection.close();
})