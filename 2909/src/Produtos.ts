
class Produtos{
    private id: number;
    private descricao: string;
    private preco: number;

    constructor(id: number, desc: string, preco: number){
        this.id = id;
        this.descricao = desc;
        this.preco = preco;
    }

    getDescricao(){
        return this.descricao;
    }

    getPreco(){
        return this.preco;
    }
}

export let lista_objetos = [
    new Produtos(1,"tenis nike",100),
    new Produtos(2,"botina", 90),
    new Produtos(3,"sapatilha", 110),
]