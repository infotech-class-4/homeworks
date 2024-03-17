import express from 'express';
import bodyParser from 'body-parser';
import calcRouter from './routes.js';

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/",calcRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})