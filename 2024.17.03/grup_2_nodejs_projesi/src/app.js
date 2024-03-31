import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routers/routes.js";
import mongoose from "mongoose";

import todosRouter from "./routers/todoRoutes.js";

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connect config

const db = process.env.MongoURL;

mongoose
  .connect(db)
  .then(console.log("DB connected..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/users", usersRouter);
app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(` Server is running at PORT: ${PORT}`);
});
