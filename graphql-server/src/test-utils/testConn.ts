
import { createConnection } from "typeorm";

export const testConn = (drop = false) => {
  return createConnection({
    name: "default",
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "keyteo-db-test",
    synchronize: drop,
    dropSchema: drop,
    entities: [ __dirname + "/../../src/entity/*.*"]
  });
};