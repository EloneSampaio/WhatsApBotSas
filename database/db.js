const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI)

mongoose.Promise = global.Promise;

const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})