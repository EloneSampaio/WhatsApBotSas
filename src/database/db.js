import mongoose from 'mongoose';

import * as dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = global.Promise;

//mongoose.connect(process.env.MONGO_URI)
mongoose.connect( 'mongodb+srv://luaitech:H21pvO5truuA7HNT@cluster0.wmfea0l.mongodb.net/whatsappbot?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
  
  