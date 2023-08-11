import jwt from "jsonwebtoken";
export class Token {
  static generateToken(
    payload: object | string | Buffer,
    secret: string,
    expiresIn: string
  ) {
    return jwt.sign(payload, secret, { algorithm: "RS256", expiresIn });
  }
  static accessToken(data: object) {
    return this.generateToken(
      data,
      process.env.ACCESS_TOKEN_SECRET as string,
      "1m"
    );
  }
  static refreshToken(data: object) {
    return this.generateToken(
      data,
      process.env.REFRESH_TOKEN_SECRET as string,
      "7d"
    );
  }
  static verifyToken(token: string, secret: string) {
    return jwt.verify(token, secret);
  }
}
