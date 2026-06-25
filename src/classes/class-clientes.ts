
class Cliente{
    id: number;
    nome:string;
    idade:number;
    status:boolean;
    entrada:string;

    constructor(id:number,nome:string,idade:number,status:boolean){
        this.id=id;
        this.nome=nome;
        this.idade=idade;
        this.status=status;
        this.entrada="Velha camarada, obrigado pela carta";
    }
}

export default Cliente
