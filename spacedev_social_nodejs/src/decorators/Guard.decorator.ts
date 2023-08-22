import "reflect-metadata";
import { GUARD_KEY } from "../constant/metadataKey";
import { JWT } from "../middlewares/jwt.middleware";

export function GuardOne(target: any, propertyKey: string, descriptor: any) {
  Reflect.defineMetadata(
    GUARD_KEY + propertyKey,
    new JWT().use,
    target.constructor
  );
}

export function GuardAll(target: any) {
  Reflect.defineMetadata(GUARD_KEY, new JWT().use, target);
}
