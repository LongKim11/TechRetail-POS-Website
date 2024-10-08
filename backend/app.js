import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
