var express = require('express')
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// le schema
var schema = buildSchema(
    `
        type Query {
            name: String
            meaningoflife: String
        }
    `
)

// root resolver function
var root = {
    name: () => {
        return "Mat The W"
    },
    meaningoflife: () => {
        return "42"
    }
}

// handler
var app = express()
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen( process.env.PORT | 4000 )