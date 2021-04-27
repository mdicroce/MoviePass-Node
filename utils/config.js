require('dotenv').config()

const PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGO_DB_STRING;
if(process.env.NODE_ENV === 'test')
{
  MONGODB_URI = process.env.MONGO_DB_STRING_TEST;

}


module.exports = {
  MONGODB_URI,
  PORT
};