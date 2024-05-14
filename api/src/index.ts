import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
  type Query {
    getProducts: [String]
  }
`

const resolvers = {
  Query: {
    getProducts: () => ['Product 1', 'Product 2'],
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const listen = async () => {
  const { url } = await startStandaloneServer(server)
  console.log(`🚀 Server ready at ${url}`)
}

listen()
