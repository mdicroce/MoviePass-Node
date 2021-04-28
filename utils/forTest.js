const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}
const totalLikes = (blogs) => {
  if (Array.isArray(blogs)) {
    return blogs[0].hasOwnProperty('likes')
      ? blogs.map((actual) => actual.likes).reduce((total, actual) => total + actual)
      : 0
  } else if (typeof blogs === 'object') {
    return blogs.hasOwnProperty('likes') ? blogs.likes : 0
  }
  return 0
}

const favoriteBlog = (blogs) => {
  if (Array.isArray(blogs)) {
    return blogs.reduce((mayor, actual) => {
      return mayor > actual ? mayor : actual
    })
  } else if (typeof blogs === 'object') {
    return blogs
  }
  return {}
}
const mostBlogs = (blogs) => {
  let aux = _.countBy(_.mapValues(blogs, (actual) => actual.author))
  aux = Object.entries(aux).reduce((mayor, actual) => {
    return mayor[1] > actual[1] ? mayor : actual
  })
  return {
    author: aux[0],
    blogs: aux[1]
  }
}
const mostLiked = (blogs) => {
  const aux = _.map(blogs, (actual) => { return { name: actual.author, likes: actual.likes } })
  return _.map(_.groupBy(aux, 'name'), (actual, key) => {
    let likes = _.map(actual, (actuali) => actuali.likes)
    likes = likes.reduce((total, find) => { return total += find })
    return { name: key, likes: likes }
  })
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLiked
}
