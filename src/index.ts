import express, { Application } from "express";
import { Database } from "./db";

const PORT = process.env.PORT || 8000;

const app: Application = express();
app.use(express.json())

const db = new Database();

app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});

app.post("/api/create", async (req, res) => {
  const key = req.body["key"];
  const val = req.body["value"];
  console.log(`The Key received is ${key} and the value received is ${val}`);
  const result = db.set(key, val);
  console.log(`Result returned from setting the key value is ${result}`);
  res.send({
    key: val,
  });
});

app.get("/api/receive", async (req, res) => {
  const key = req.query["key"];
  console.log(`The Key received from the request is ${key}`);
  const result = key ?? db.get(key??'');
  console.log(`Result returned from fetching the ${key} is ${result}`);
  res.send({
    key: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
