const mongoose = require('mongoose')

const cinemaSchema = new mongoose.Schema({
  name: String,
  adress: {
    adress: String,
    CP: String,
    City: String,
    State: String,
    Country: String
  },
  salas: [
    {
      movie: String,
      shows: [{
        date: Date,
        chairs: [{ number: String, QR: String, isSold: Boolean }]
      }],
      price: Number

    }
  ],
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Cinema', cinemaSchema)
