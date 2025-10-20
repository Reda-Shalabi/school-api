import moongose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function DBconnect() {
  try {
    moongose.connect(process.env.MONGO_URI);
    console.log("DB is Connected")
  } catch (error) {
    console.log(error);
  }
}

export {DBconnect}