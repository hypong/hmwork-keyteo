import { buildSchema } from "type-graphql";
import { ButtonResolver } from "../modules/resolvers/Button";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      ButtonResolver
    ]
  });