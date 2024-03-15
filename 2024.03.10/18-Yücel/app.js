import express from "express"
import usersRouter from './router.js'
import bodyParser from "body-parser"

const PORT = 3000;
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/calc",usersRouter)

app.listen(PORT,()=>{
    console.log(`Server ${PORT} portunda calisiyor...`);
})
