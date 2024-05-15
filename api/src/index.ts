import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { loadFilesSync } from '@graphql-tools/load-files'
import { typeDefs as scalarTypeDefs } from 'graphql-scalars'

import resolvers from './resolvers.graphql'

const server = new ApolloServer({
  typeDefs: [...scalarTypeDefs, loadFilesSync('./src/**/*.graphql')],
  resolvers,
})

const listen = async () => {
  const { url } = await startStandaloneServer(server)
  console.log(`🚀 Server ready at ${url}`)
}

listen()
