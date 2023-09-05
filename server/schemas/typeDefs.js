const typeDefs = `
type Query {
    me: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User
    saveBook: Book
    removeBook: Book
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
    authors: []
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: String
    user: [User]!
}`