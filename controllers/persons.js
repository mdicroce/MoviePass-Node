const personRouter = require('express').Router();
const Person = require('../models/Person');

personRouter.get("/:id", async (request, response,next) => {
  try {
    const res = await Person.findById(request.params.id);
    res.json(res);
    
  } catch (error) {
    next(error)
  }
  
  
});
personRouter.get("/", async(request, response,next) => {
  
  try {
    const persons = await Person.find({})
    response.json(persons);
  } catch (error) {
    next(error);
  }
  
});
personRouter.get("/info", (request, response) => {
  const size = persons.length;
  const time = new Date();
  const text = `<p>Phonebook has info for ${size} people </p>
    <p> ${time}</p>`;
  response.send(text);
});

personRouter.post("/", async(request, response) => {
  const { body } = request;
  const text = errorPost(body);
  
  if (text) {
    response.status(400).json({
      error: text,
    }).end();
  }
  else
  {

    const newPerson = new person({
      name: body.name,
      number: body.number,
    });
    try {
      const savedPerson = await newPerson.save()
      response.json(savedPerson)
    } catch (error) {
      next(error);
    }
  }
    
});
personRouter.put("/:id" , async(request,response, next) =>
{
  const {id} = request.params;
  const note = request.body;
  const noteInfo = {
    name : note.name,
    number : note.number
  };
  try {
    const result = await Person.findByIdAndUpdate(id,noteInfo,{new: true});
    response.json(result);
  } catch (error) {
    next(error);
  }
})
personRouter.delete("/:id", async(request, response, next) => {
  const {id} = request.params;
  try {
    await Person.findByIdAndDelete(id);
    response.status(204).end();
    
  } catch (error) {
    next(error);
  }
  

});
const errorPost = (body) => {
  if (!body.name) {
    return "Request doesen't have a name";
  }
  if (!body.number) {
    return "Request doesen't have a number";
  }
  if (persons.find((actual) => actual.name === body.name)) {
    return "Name is already taken";
  }
  return "";
};

module.exports = personRouter;