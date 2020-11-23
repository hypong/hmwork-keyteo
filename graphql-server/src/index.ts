import "reflect-metadata";
import * as Express from "express";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";

import { createSchema } from "./utils/createSchema";

const main = async () => {
  await createConnection();

  const schema = await createSchema();

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

main();