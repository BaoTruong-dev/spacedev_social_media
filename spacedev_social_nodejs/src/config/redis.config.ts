import { createClient } from "redis";

export const client = createClient();

async function main() {
  client.on("error", (err) => console.log("Redis Client Error", err));
  client.on("ready", () => {
    console.log("Connected to Redis successfully!");
  });
  await client.connect();
}

main();
