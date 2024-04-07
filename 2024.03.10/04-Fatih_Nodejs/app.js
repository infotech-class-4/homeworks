import express from "express"
import bodyParser from "body-parser"
import calcRouter from "./routes/routes.js"

const PORT = 3000 // 3000 portunda calısmak icin

const app = express()  //express in ozelliklerini kullanabilmek icin degiskene atamak gerek

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use("/", calcRouter)


app.listen(PORT, ()=> {
    console.log(`Server ${PORT} portunda calısıyor...`);  // server ın calıstıgını gormus oluyoruz(yani ayaga kaldırıyoruz) onu dinleterek
})
