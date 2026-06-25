import  Cliente  from "./class-clientes";
import Produto from "./class-produto";

class Comanda{
    cliente:Cliente;
    produto:Produto[];

    constructor(cliente:Cliente,produto:Produto[]=[]){
        this.cliente=cliente;
        this.produto=produto;
        
    }

     public calcularTotal(): number {
        return this.produto.reduce((soma, item) => soma + item.preco, 0);
    }
}

export default Comanda