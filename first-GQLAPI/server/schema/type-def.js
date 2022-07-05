const { gql } = require("apollo-server");

const typeDefs = gql `
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        nationality: Nationality!
        friends: [User]
        favouriteMovie: [Movie]
    }

    type  Movie {
        name: String!
        director: String!
        musicDirector: String!
        yearOfRelease: Int
        duration: Float
        isUAFile: Boolean
    }
     type Query{
         users: [User!]!
         user(id: ID!): User!
         movies: [Movie!]!
         movie(name: String!): Movie!
         
     }
     input createUserInput{
       
        name: String!
        username: String!
        email: String!
        nationality: Nationality =  INDIA
    
     }
     input updateUserInput{
        newName: String!
        id:ID !
     }
     
     type Mutation {
         createUser(input: createUserInput!): User
         updateUserName(input: updateUserInput!): User
         deleteUser(id: ID!):User
     }
     enum Nationality{
         INDIA
         SRILANKA
         WESTBENGAL
         PAKISTAN
         CHINA
         NEPAL
         BHUTAN
         JAPAN
         PHILIPINES
         SINGAPORE
         MALAYSIA
         THAILAND
         AFGANISTAN
         AUSTRALIA
         OTHERS
     }
`;
module.exports =    { typeDefs };