import { GUARD_KEY } from "./../constant/metadataKey";
import { Express, NextFunction, Request, Response, Router } from "express";

import "reflect-metadata";
import { ROUTERS_KEY, VALIDATE_KEY } from "../constant/metadataKey";

interface RouteInfoType {
  method: "get" | "put" | "patch" | "post" | "delete";
  url: string;
  handler: (req: Request, res: Response) => void;
  propertyKey: string;
}

export function Controllers(prefix: string) {
  return (target: any): any => {
    return class extends target {
      app: Express;
      constructor(app: Express) {
        super();
        this.app = app;
        const route = Router();
        const routes: RouteInfoType[] = Reflect.getMetadata(
          ROUTERS_KEY,
          target
        );
        routes.forEach((e) => {
          let middlewares = [];
          middlewares.push(
            async (req: Request, res: Response, next: NextFunction) => {
              try {
                await e.handler.apply(this, [req, res]);
              } catch (error) {
                next(error);
              }
            }
          );
          const validate = Reflect.getMetadata(
            VALIDATE_KEY + e.propertyKey,
            target
          );
          const guardOne = Reflect.getMetadata(
            GUARD_KEY,
            target,
            e.propertyKey
          );

          const guardAll = Reflect.getMetadata(GUARD_KEY, target);
          if (validate) {
            middlewares.unshift(validate);
          }
          if (guardOne) {
            for (let i = guardOne.length - 1; i >= 0; i--) {
              middlewares.unshift(guardOne[i]);
            }
          }
          if (guardAll) {
            middlewares.unshift(guardAll);
          }
          console.log(middlewares);

          route[e.method](prefix + e.url, ...middlewares);
        });
        this.app.use(route);
      }
    };
  };
}
function FactoryMethod(method: "get" | "put" | "patch" | "post" | "delete") {
  return (url: string) => {
    return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) => {
      const originalMethod = descriptor.value;

      const routes: RouteInfoType[] =
        Reflect.getMetadata(ROUTERS_KEY, target.constructor) || [];
      routes.push({
        method,
        url,
        handler: originalMethod,
        propertyKey,
      });
      Reflect.defineMetadata(ROUTERS_KEY, routes, target.constructor);
    };
  };
}

export const Get = FactoryMethod("get");
export const Post = FactoryMethod("post");
