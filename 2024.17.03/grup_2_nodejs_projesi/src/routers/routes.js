import { auth } from "../middleware/auth.js";
import express from "express";

import {
  register,
  login,
  find,
  findAll,
  update,
  remove,
} from "../sevices/userService.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/:id", find);

router.get("/", auth, findAll);

router.patch("/update", update);

router.delete("/:id", remove);

export default router;
