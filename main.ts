import express from "express";
import mongoose from "mongoose";


const MONGO_URL = Deno.env.get("MONGO_URL"); /*busca en variables de entorno*/

if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
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