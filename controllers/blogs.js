const blogRouter = require('express').Router();
const Blog = require('../models/Blog');
 blogRouter.get('/', async(request, response) => {
  const blog = await Blog.find({});
  response.json(blog);
});
blogRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body);
  if(!blog.name||!blog.author)
  {
    response.status(400).json({error: "Faltan campos por completar"}).end();
  }
  else{
    const result = await blog.save();
    response.status(201).json(result);
  }
})

module.exports = blogRouter;