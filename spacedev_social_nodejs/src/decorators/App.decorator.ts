import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import path from "path";
import "../config/db.config";
import "../config/redis.config";

import {
  handleCatchError,
  NotMatchedRoute,
} from "./../middlewares/error.middleware";

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
        this.app.use(
          cors({
            origin: process.env.FE_URL,
            credentials: true,
          })
        );
        this.app.use(cookieParser());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use("/upload", express.static(path.join(__dirname, "upload")));
        controllers.forEach((controller) => {
          new controller(this.app);
        });

        this.app.use(handleCatchError);
      }
      listen(port: string | number, cb: () => void) {
        this.app.listen(port, cb);
        this.app.use(NotMatchedRoute);
      }
      use(...args: any[]): void {
        this.app.use(...args);
      }
    };
  };
}

export class BaseApp {
  listen(port: string | number, cb: () => void) {}
  use(...args: any[]) {}
}
