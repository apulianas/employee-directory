const {buildSchema} = require('graphql');

module.exports = buildSchema(`
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
    `);