import express from "express";
import { calc } from './calc.js';


const router =express.Router();

router.get("/islem", (req,res)=>{
    const {num1, num2,islem} = req.query;

    const sonuc =calc(Number(num1),Number(num2),islem);
    res.json({...sonuc,islem: islem,istek:"Get istegi"});
});

router.post("/islem",(req,res)=>{
    const {num1,num2,islem} =req.body;

    const sonuc =calc(num1,num2,islem);
    res.json ({...sonuc,islem: islem,istek:"Post istegi"});
});
export default router;