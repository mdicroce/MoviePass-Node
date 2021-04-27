const {dummy, totalLikes, favoriteBlog, mostBlogs, mostLiked} = require('../utils/forTest');
const blogs = [ { title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7}, {title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5 }, {title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12}, {  title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10  }, { title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0}, { title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2},
  { title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0}, { title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2}
]
describe('blogs', () => {
    const listWithOneBlog = [
    {
            title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]
    test('dummy always returns 1',()=>{
        expect(dummy()).toBe(1);
    })
    test('total likes of empty has to be 0',()=>{
        expect(totalLikes()).toBe(0);
    })
    test('total likes of notArray has to be 0',()=>{
        expect(totalLikes(2)).toBe(0);
    })
    test('total likes of listWithOneBlog has to be 5',()=>{
        expect(totalLikes(listWithOneBlog)).toBe(5);
    })
    test('total likes of Object has to be 0',() =>{
        expect(totalLikes({'number':1})).toBe(0);
    })
})
describe('favoriteBlog', () => {
    const listWithOneBlog = [
    {
            title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]
  const listWithMultiplesBlogs = [
      {
            title: 'Go To Statement Considered fasFASFASFAG',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 17,
      __v: 0
    },{
            title: 'Go To FAFGDAGAGAG Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },{
            title: 'Go To 3412453263547u468 Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 13,
      __v: 0
    },{
            title: 'Go To Statement afasdgaghaewryhwrae Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 99,
      __v: 0
    }
  ]
    test('of one blog has to be the same blog', ()=>{
        expect(favoriteBlog(listWithOneBlog)).toEqual(listWithOneBlog[0]);
    })
    test('of multiples blogs has to be the most liked', ()=> {
        expect(favoriteBlog(listWithMultiplesBlogs)).toEqual({
            title: 'Go To Statement afasdgaghaewryhwrae Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 99,
      __v: 0
    });
    })
})
describe('mostBlogs', ()=>{
  
  test('give varius blog entries and recive the author and the quantity of blogs writen',()=>{
    expect(mostBlogs(blogs)).toEqual({"author": "Robert C. Martin", "blogs": 5});
  })
})

describe('mostLiked',()=>{
    test('give varius blog entries and recive the author and the quantity of likes',()=>
    {
      expect(mostLiked(blogs)).toEqual([{"likes": 7, "name": "Michael Chan"}, {"likes": 17, "name": "Edsger W. Dijkstra"}, {"likes": 14, "name": "Robert C. Martin"}]);
    })
})

module.exports = {blogs}