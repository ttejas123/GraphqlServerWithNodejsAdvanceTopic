const {ApolloServer, gql} = require('apollo-server')
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')
const typeDefs = require("./schema/graphqlgql")
const mongoose = require('mongoose')
const { DbUrl } = require('./Config/index')
const Resolver = require('./Resolver/index')


mongoose.connect(DbUrl)
const db = mongoose.connection;
db.once('open', ()=> {
  console.log("Connected to DB")
})

db.on('error', ()=> {
  console.log("Error Occure")
})



const server = new ApolloServer({
  typeDefs,
  resolvers: Resolver,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
})

server.listen(3000).then(({url})=> {
  console.log(url)
})





