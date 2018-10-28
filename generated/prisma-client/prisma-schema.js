module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCollection {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Collection {
  id: ID!
  owner: Int!
  name: String!
  private: Boolean!
  items: [Int!]!
}

type CollectionConnection {
  pageInfo: PageInfo!
  edges: [CollectionEdge]!
  aggregate: AggregateCollection!
}

input CollectionCreateInput {
  owner: Int!
  name: String!
  private: Boolean
  items: CollectionCreateitemsInput
}

input CollectionCreateitemsInput {
  set: [Int!]
}

type CollectionEdge {
  node: Collection!
  cursor: String!
}

enum CollectionOrderByInput {
  id_ASC
  id_DESC
  owner_ASC
  owner_DESC
  name_ASC
  name_DESC
  private_ASC
  private_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CollectionPreviousValues {
  id: ID!
  owner: Int!
  name: String!
  private: Boolean!
  items: [Int!]!
}

type CollectionSubscriptionPayload {
  mutation: MutationType!
  node: Collection
  updatedFields: [String!]
  previousValues: CollectionPreviousValues
}

input CollectionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CollectionWhereInput
  AND: [CollectionSubscriptionWhereInput!]
  OR: [CollectionSubscriptionWhereInput!]
  NOT: [CollectionSubscriptionWhereInput!]
}

input CollectionUpdateInput {
  owner: Int
  name: String
  private: Boolean
  items: CollectionUpdateitemsInput
}

input CollectionUpdateitemsInput {
  set: [Int!]
}

input CollectionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: Int
  owner_not: Int
  owner_in: [Int!]
  owner_not_in: [Int!]
  owner_lt: Int
  owner_lte: Int
  owner_gt: Int
  owner_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  private: Boolean
  private_not: Boolean
  AND: [CollectionWhereInput!]
  OR: [CollectionWhereInput!]
  NOT: [CollectionWhereInput!]
}

input CollectionWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCollection(data: CollectionCreateInput!): Collection!
  updateCollection(data: CollectionUpdateInput!, where: CollectionWhereUniqueInput!): Collection
  updateManyCollections(data: CollectionUpdateInput!, where: CollectionWhereInput): BatchPayload!
  upsertCollection(where: CollectionWhereUniqueInput!, create: CollectionCreateInput!, update: CollectionUpdateInput!): Collection!
  deleteCollection(where: CollectionWhereUniqueInput!): Collection
  deleteManyCollections(where: CollectionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  collection(where: CollectionWhereUniqueInput!): Collection
  collections(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Collection]!
  collectionsConnection(where: CollectionWhereInput, orderBy: CollectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollectionConnection!
  node(id: ID!): Node
}

type Subscription {
  collection(where: CollectionSubscriptionWhereInput): CollectionSubscriptionPayload
}
`
      }
    