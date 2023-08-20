import mongoose from "mongoose";
import { config } from "dotenv";
config();
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string, {
      dbName: process.env.DB_NAME,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log(error, "db");
  }
}

main();
