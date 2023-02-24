const {gql} = require('apollo-server')
const typeDefs = gql`
type Query{
  users: [User]
  user(id:ID!):User
  quotes: [Quote]
  quote(id:ID!):Quote
}
type User{
  _id:ID
  name: String
  age: Int
  nationality: String
  bloodGroup: String
  gender: String
  profession: String
  jobType: String
  skills: [String]
  quotes: [Quote]
}
type Quote{
  _id: ID
  by: ID
  quote: String
}
type Mutation{
    createUser(userNew:UserInput!): User
    deleteUser(id:ID!): String
    createQuote(quoteNew:QuoteInput!): Quote
}
input QuoteInput{
        by: ID!
        quote: String!
}
input UserInput{
        name: String!,
        age: Int!,
        nationality: String!,
        bloodGroup: String!,
        gender: String!,
        profession: String!,
        jobType: String!,
        skills: [String]
}
`
module.exports = typeDefs