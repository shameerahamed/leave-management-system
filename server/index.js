import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from './src/config/mongoose';
import cors from 'cors';

import schema from './src/graphql';

const db = mongoose();
const app = express();

app.use('*', cors());

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 8080, () => {
  console.log('A GraphQL API running at port 4000');
});
