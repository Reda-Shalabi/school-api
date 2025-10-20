import express from "express";
import { config } from "dotenv";
import DBconnect from "./config/db.js";

config();
const app = express();


await DBconnect();

app.listen(process.env.Port || 3001, () => {
  console.log("SERVER IS ONLINE");
});
