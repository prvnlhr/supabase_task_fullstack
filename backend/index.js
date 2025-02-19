import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

const allowedOrigins = ["https://supabase-task-fullstack.vercel.app"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        // Allow requests with no origin (like mobile apps or Postman)
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

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
