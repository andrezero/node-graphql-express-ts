import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';

const app = express();

import schema from './graphql';
import mongoose from 'mongoose';

const options = {
  useCreateIndex: true,
  useNewUrlParser: true
};
mongoose.connect('mongodb://localhost/foobar', options)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/graphql',
  cors(),
  bodyParser.json(),
  graphqlHTTP(() => ({
    schema: schema,
    graphiql: true
  })
));

app.listen(4000);
