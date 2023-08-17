import { AppDecorator, BaseApp } from "./decorators/App.decorator";
import { config } from "dotenv";
import { UsersController } from "./controllers/users.controller";
config();
const PORT = process.env.PASSWORD || 8080;
@AppDecorator({
  controllers: [UsersController],
})
export class App extends BaseApp {}

let app = new App();

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
