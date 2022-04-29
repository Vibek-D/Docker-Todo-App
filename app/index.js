import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const typeDefs = gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
  `;

  const books = [
    {
      title: "The Awakening",
      author: "Kate Chopin",
    },
    {
      title: "City of Glass",
      author: "Paul Auster",
    },
  ];

  const resolvers = {
    Query: {
      books: () => books,
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/",
  });

  await new Promise((resolve) => httpServer.listen({ port: 3000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:3000/graphql`);
}

startApolloServer();
