const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    collections(root, args, context) {
      return context.prisma.collections()
    },
    collection(root, args, context) {
      return context.prisma.collection({
        id: args.collectionId
      })
    }
  },
  Mutation: {
    createCollection(root, args, context) {
      return context.prisma.createCollection({
        name: args.name,
        owner: args.owner
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  }
})

server.start(() => console.log('Server is running on http://localhost:4000'))
