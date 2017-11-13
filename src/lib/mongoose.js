// http://mongoosejs.com/
const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydb', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose
