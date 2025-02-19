import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

app.use("/api", router);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`server running on:${PORT}`);
  }
});
