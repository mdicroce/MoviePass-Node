const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.post('/', async (request, response) => {
  const body = request.body
  const { username } = body
  const search = User.find({ username })
  if (search) {
    response.status(500).json({ error: "username it's already taken" })
  }
  const saltRound = 5
  const passwordHash = await bcrypt.hash(username, saltRound)

  const newUser = new User({
    username: body.username,
    passwordHash
  })

  const savedUser = await newUser.save()
  response.json(savedUser)
})
module.exports = usersRouter
