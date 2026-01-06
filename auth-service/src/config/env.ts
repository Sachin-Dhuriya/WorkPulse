import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT || 4001,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "wp_auth",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASS: process.env.DB_PASS || "postgres",
  JWT_SECRET: process.env.JWT_SECRET || "supersecretkey",
  DB_DIALECT: process.env.DB_DIALECT || "postgres",
};

type dialect = "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql";
