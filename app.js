const express = require('express');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlResolvers = require('./graphql/resolvers/index');
const graphQlSchema = require('./graphql/schema/index');

const app = express();

const employees = [];

app.use(express.json());

app.use('/graphql', graphqlHttp.graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
    })
);

mongoose.connect(
    `mongodb+srv://${
        process.env.MONGO_USER}:${
            process.env.MONGO_PASSWORD
        }@cluster0.dgpyk.mongodb.net/${
            process.env.MONGO_DB
        }?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
