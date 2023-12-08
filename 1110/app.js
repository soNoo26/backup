import express from 'express'
import cors from 'cors'
import { Produtos } from "./Produtos.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/novo",(req,res)=>{
    const{ id, descricao, preco } = req.body;
    const produto = new Produtos(id, descricao, preco);
    return res.status(200).send(produto);
})

app.listen(4000,()=>{console.log("Running!")
})