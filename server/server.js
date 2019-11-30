const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

const typeDefs = gql`
    type Query{
        sayHi : String!
    }
`;
const resolvers = {
  Query: {
    sayHi: () => `Hello`
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: 3000 }).then(res => {
  console.log(`Server is running at ${3000}`);
});
