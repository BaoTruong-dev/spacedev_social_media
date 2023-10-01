import { expressMiddleware } from "@apollo/server/express4";
import { config } from "dotenv";
import { server } from "./config/graphQl.config";
import AuthController from "./controllers/auth.controller";
import FileController from "./controllers/file.controller";
import FriendController from "./controllers/friend.controller";

import UserController from "./controllers/user.controller";
import { AppDecorator, BaseApp } from "./decorators/App.decorator";

config();
const PORT = process.env.PASSWORD || 8080;
@AppDecorator({
  controllers: [
    AuthController,
    UserController,
    FileController,
    FriendController,
  ],
})
export class App extends BaseApp {}

let app = new App();

const main = async () => {
  await server.start();

  app.use("/graphql", expressMiddleware(server));
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

main();
