import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export interface TokenType extends jwt.JwtPayload {
  uid: string;
  iat: number;
  exp: number;
}
export class Token {
  static generateToken(
    payload: object | string | Buffer,
    secret: string,
    expiresIn: string
  ) {
    return jwt.sign(payload, secret, { algorithm: "HS256", expiresIn });
  }
  static accessToken(data: object) {
    return this.generateToken(
      data,
      process.env.ACCESS_TOKEN_SECRET as string,
      "10m"
    );
  }
  static refreshToken(data: object) {
    return this.generateToken(
      data,
      process.env.REFRESH_TOKEN_SECRET as string,
      "7d"
    );
  }
  static verifyToken(token: string, secret: string): TokenType {
    return jwt.verify(token, secret) as TokenType;
  }
}
