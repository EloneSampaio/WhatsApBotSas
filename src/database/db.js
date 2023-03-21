import mongoose from 'mongoose';

import * as dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = global.Promise;

//mongoose.connect(process.env.MONGO_URI)
mongoose.connect(`mongodb+srv://${process.env.NOSQL_DB_USER}:${process.env.NOSQL_DB_PASS}@${process.env.NOSQL_DB_HOST}/${process.env.NOSQL_DB_NAME}?`)
.then(() => console.log('Connected!'));

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
  
  