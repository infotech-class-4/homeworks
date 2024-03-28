import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();

import todosRouter from "./routers/routes.js";
import mongoose from "mongoose";

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/todos", todosRouter);

const db = process.env.MongoURL;

mongoose
  .connect(db)
  .then(console.log("DB connected..."))
  .catch((err) => {
    console.log(err);
  });



app.listen(PORT, () => {
  console.log(` Server is runnig at PORT: ${PORT}`);
});
