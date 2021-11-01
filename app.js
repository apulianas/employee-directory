const express = require('express');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const {buildSchema} = require('graphql');

const app = express();

const employees = [];

app.use(express.json());

app.use('/graphql', graphqlHttp.graphqlHTTP({
    schema: buildSchema(`
        type Employee {
            _id: ID!
            name: String!
            location: String!
            email: String!
            phone: String!
            picture: String
        }

        input EmployeeInput {
            name: String!
            location: String!
            email: String!
            phone: String!
            picture: String
        }

        type RootQuery {
            employees: [Employee!]!
        }

        type RootMutation {
            createEmployee(employeeInput: EmployeeInput): Employee
        }
         
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        employees: () => {
            return Employee.find()
          .then(events => {
            return events.map(event => {
              return { ...event._doc, _id: event.id };
            });
          })
          .catch(err => {
            throw err;
          });
        },
        createEmployee: async args => {
            try{
                const employee = new Employee({
                name: args.employeeInput.name,
                location: args.employeeInput.location,
                email: args.employeeInput.email,
                phone: args.employeeInput.phone,
                picture: args.employeeInput.picture
            });
            return await employee.save();
            }   
            catch (err) {
                console.log(err);
                throw new Error("New Employee Not Created: ", err);
            }
        }
    },
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
