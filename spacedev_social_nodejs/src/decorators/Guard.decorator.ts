import { jwtMiddleware } from './../middlewares/jwt.middleware';
import "reflect-metadata";
import { GUARD_KEY } from "../constant/metadataKey";

export function GuardOne(middlewares: any[]) {
  return (target: any, propertyKey: string, descriptor: any) => {
    Reflect.defineMetadata(
      GUARD_KEY,
      middlewares,
      target.constructor,
      propertyKey
    );
  };
}

export function GuardAll(target: any) {
  Reflect.defineMetadata(GUARD_KEY, jwtMiddleware.accessToken, target);
}
