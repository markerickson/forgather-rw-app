export const schema = gql`
  type UserExample {
    id: Int!
    email: String!
    name: String
  }

  type Query {
    userExamples: [UserExample!]!
    userExample(id: Int!): UserExample
  }

  input CreateUserExampleInput {
    email: String!
    name: String
  }

  input UpdateUserExampleInput {
    email: String
    name: String
  }

  type Mutation {
    createUserExample(input: CreateUserExampleInput!): UserExample!
    updateUserExample(id: Int!, input: UpdateUserExampleInput!): UserExample!
    deleteUserExample(id: Int!): UserExample!
  }
`
