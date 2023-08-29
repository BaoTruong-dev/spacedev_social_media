import mongoose from "mongoose";
import { config } from "dotenv";
import AuthController from "./controllers/auth.controller";
import { AppDecorator, BaseApp } from "./decorators/App.decorator";
import UserController from "./controllers/user.controller";
import FileController from "./controllers/file.controller";
import FriendController from "./controllers/friend.controller";

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

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
