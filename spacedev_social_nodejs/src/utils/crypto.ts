import crypto from "crypto";
export const hashPassword = (password: string) => {
  const hash = crypto.createHash("sha256");
  hash.update(password + process.env.PASSWORD_SALT);
  return hash.digest("hex");
};

export const generateRandomSalt = (length = 32) => {
  return crypto.randomBytes(length).toString("hex");
};
