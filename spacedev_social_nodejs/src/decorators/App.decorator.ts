import express, { Express } from "express";
import path from "path";

export function AppDecorator(target: any) {
  return class extends target {
    app: Express;
    constructor() {
      super();
      this.app = express();
      this.app.use(express.json());
      this.app.use('/upload', express.static(path.join(__dirname, 'upload')));
    }
    listen(port: string | number, cb: () => void) {
      this.app.listen(port, cb);
    }
  };
}

export class BaseApp {
  listen(port: string | number, cb: () => void) {}
}
