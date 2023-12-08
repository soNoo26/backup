import express from 'express'
const app = express();

let lista = [1,2,3,4,5]

app.get("/",(requisicao, resposta)=>{
    return resposta.send(lista);
});

app.post("/novo",(requisicao,resposta)=>{
    return requisicao.send();
})

app.listen(3000,()=>{
    console.log("boca juniors")
});