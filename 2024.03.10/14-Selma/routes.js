 import express from "express";
 import {calc} from "./calc.js";


 const router = express.Router();
 router.get("/islem", (req, res) => {
    const data = req.query;
    console.log(data);
    const result = calc(Number(data.num1), Number(data.num2), data.islem);
    res.json({...result , islem:data.islem , istek:"GET ile gelen istek"});
 });

 router.post("/" , (req,res)=>{
    const data= req.body;
    const result = calc(Number(data.num1), Number(data.num2), data.islem);
    res.json({...result , islem:data.islem , istek:"POST ile gelen istek"});
 })

 export default router;