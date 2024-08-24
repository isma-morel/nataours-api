import "reflect-metadata";
import app from "./config/config.app";
import { AppDataSource } from "./config/config.database";
import { config } from "./config/config.enviroment";

async function main() {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Db connected");
      app.listen(config.app.port, () => {
        console.log(
          `[SERVER]: Server is running at http://localhost:${config.app.port}`
        );
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

main();
