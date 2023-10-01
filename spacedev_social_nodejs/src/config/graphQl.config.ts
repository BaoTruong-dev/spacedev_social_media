import { ApolloServer } from "@apollo/server";
import { UserModel } from "./../models/user.model";

import { userSchemaQl } from "../models/user.model";

const typeDefs = `#graphql
  ${userSchemaQl}
  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      return await UserModel.find({});
    },
  },
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
