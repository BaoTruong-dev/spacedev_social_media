import {
  handleCatchError,
  NotMatchedRoute,
} from "./../middlewares/error.middleware";
import express, { Express } from "express";
import helmet from "helmet";
import path from "path";
import cors from "cors";
import "../config/db.config";
import "../config/redis.config";
import cookieParser from "cookie-parser";

interface AppDecoratorOptions {
  controllers: any[];
}
export function AppDecorator(options: AppDecoratorOptions) {
  const { controllers } = options || [];

  return (target: any) => {
    return class extends target {
      app: Express;
      constructor() {
        super();
        this.app = express();
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use("/upload", express.static(path.join(__dirname, "upload")));
        controllers.forEach((controller) => {
          new controller(this.app);
        });
        this.app.use(NotMatchedRoute);
        this.app.use(handleCatchError);
      }
      listen(port: string | number, cb: () => void) {
        this.app.listen(port, cb);
      }
    };
  };
}

export class BaseApp {
  listen(port: string | number, cb: () => void) {}
}
