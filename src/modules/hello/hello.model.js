const mongoose = require('lib/mongoose')

var HelloSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Hello', HelloSchema)
