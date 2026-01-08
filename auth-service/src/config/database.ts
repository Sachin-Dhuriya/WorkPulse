import { Sequelize, Dialect } from "sequelize";
import { env } from "./env";

export const sequelize = new Sequelize(
  env.DB_NAME!,
  env.DB_USER!,
  env.DB_PASS!,
  {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT as Dialect,
    logging: false,
  }
);

