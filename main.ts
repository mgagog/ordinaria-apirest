import express from "express";
import mongoose from "mongoose";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL /*busca en el archivo*/ || Deno.env.get("MONGO_URL"); /*busca en variables de entorno*/

if (!MONGO_URL) {
  console.log("No hay MONGO_URL");
  Deno.exit(1);
}

try{
  await mongoose.connect(MONGO_URL);
  console.info("Mongo connected");
}catch(error){
  console.error(error);
}

const app = express();
app.use(express.json());
app
  .get("", )
  .post("", )
  .put("", )
  .delete("", );
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});