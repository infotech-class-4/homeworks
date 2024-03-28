import express from "express";
import { add, get, remove, update } from "../services/todoService.js";

const router = express.Router();

// router.get("/", (req, res)=> {
//     res.send("get islemi basarılı...")
// })

router.post("/add", add);
router.get("/get", get);
router.patch("/update", update);
router.delete("/:id", remove);

export default router;
