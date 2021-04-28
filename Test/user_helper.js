const User = require('../models/User')

const usersInDb = async () => {
  const users = await User.find({})
  return users.map((actual) => actual.toJSON())
}

module.exports = { usersInDb }
