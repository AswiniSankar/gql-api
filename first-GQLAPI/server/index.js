const { ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema/type-def");
const {resolvers} = require("./schema/resolver");
const server = new ApolloServer( { typeDefs, resolvers});

server.listen().then(({ url  }) => {
    console.log(`Your API is running  ${url}`);
}

);