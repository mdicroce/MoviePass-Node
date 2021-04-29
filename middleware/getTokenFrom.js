const jwt = require('jsonwebtoken')

module.export = (request, response, next) => {
  const authorization = request.get('authorization')
  if (!authorization || !authorization.toLowerCase().startsWith('bearer ')) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const token = authorization.substring(7)
  const decodedToken = jwt.verify(token, process.env.SECRET)

  if (!decodedToken?.id === null) return response.status(401).json({ error: 'token missing or invalid' })

  const { id: userId } = decodedToken
  request.userId = userId

  next()
}
