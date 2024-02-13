import express from "express";
import eventRouter from "./routes/Event"
import dotenv from "dotenv"
import connDB from "./db";
dotenv.config()
connDB()
const PORT = process.env.PORT || 8032
const app = express();
app.use(express.json());


app.use("/api", eventRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
