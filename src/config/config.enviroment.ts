import dotenv from "dotenv";

dotenv.config();

const { PORT_APP, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
const port: number | undefined = parseInt(DB_PORT || "5432", 10);
const config = {
  app: {
    port: PORT_APP || 3030,
  },
  db: {
    db_user: DB_USERNAME,
    db_pw: DB_PASSWORD,
    db_name: DB_NAME,
    db_port: port,
  },
};

export { config };
