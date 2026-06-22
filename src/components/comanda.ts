import  { Cliente } from "./clientes";

export class Produto{
    nome:string;
    preco:number;
    constructor(nome:string, preco:number) {
        this.nome= nome;
        this.preco = preco;
    }
}

export class Comanda{
    cliente:Cliente;
    item:Produto;
    constructor(cliente:Cliente,item:Produto){
        this.cliente=cliente;
        this.item=item;
    }
}

