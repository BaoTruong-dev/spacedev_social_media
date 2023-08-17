import mongoose from "mongoose";
import { config } from "dotenv";
config();
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string, {
      dbName: "social_media",
    });
    console.log("connected to DB");
  } catch (error) {
    console.log(error, 'db');
  }
}

main();
