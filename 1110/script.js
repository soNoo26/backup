document.querySelector("#btn").addEventListener("click",()=>{
    fetch("http://localhost:4000/")
    .then((resposta)=>{
        resposta.json().then((dados)=>{
            let body = document.querySelector("body");
            let texto = document.createElement("p");
            texto.innerText = dados
            body.append(texto)
        })
    })
})