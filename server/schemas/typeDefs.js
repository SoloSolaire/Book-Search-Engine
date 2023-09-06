const typeDefs = `
type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User
    saveBook(input: BookInput!): Book
    removeBook(bookId: String!): Book
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: String
    user: [User]!
}`

module.exports = typeDefs;