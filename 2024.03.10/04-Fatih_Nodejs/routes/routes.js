import express from "express";

import { calc } from "../calc.js";

const router = express.Router();

router.get("/islem", (req, res) => {
  const data = req.query;

  const result = calc(Number(data.num1), Number(data.num2), data.islem);

  res.json({ ...result, islem: data.islem, istek: "GET isteği" });
});

router.post("/islem", (req, res) => {
  const data = req.body;

  const result = calc(data.num1, data.num2, data.islem);

  res.json({ ...result, islem: data.islem, istek: "POST isteği" });
});

export default router;
