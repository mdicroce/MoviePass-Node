const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.post('/', async (request, response) => {
  const body = request.body
  const { username } = body
  const search = await User.find({ username })
  const searchF = search.map(u => u.toJSON())
  if (searchF.length > 0) {
    response.status(500).json({ error: "username it's already taken" })
  }
  const saltRound = 5
  const passwordHash = await bcrypt.hash(body.password, saltRound)

  const newUser = new User({
    username: body.username,
    passwordHash
  })

  const savedUser = await newUser.save()
  response.status(201).json(savedUser)
})
usersRouter.get('/', async (request, response) => {
  const users = User.find({})
  response.status(200).json(users)
})

module.exports = usersRouter
