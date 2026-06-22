export class Cliente{
    id: number;
    nome:string;
    idade:number;
    status:boolean;

    constructor(id:number,nome:string,idade:number,status:boolean){
        this.id=id;
        this.nome=nome;
        this.idade=idade;
        this.status=status;
    }

}
export function CriaClientes(){

    function gerarNumAleatorio(min: number, max: number):number{
        return Math.floor(Math.random()* (max-min+1))+min;
    }

    const lista_nome= [ 
        "Ana",
        "João",
        "Maria",
        "Pedro",
        "Lucas",
        "Julia",
        "Mateus",
        "Larissa",
        "Gabriel",
        "Beatriz",
        "Guilherme",
        "Mariana",
        "Thiago",
        "Camila",
        "Gustavo",
        "Amanda",
        "Rafael",
        "Letícia",
        "Felipe",
        "Isabela",
        "Leonardo",
        "Carolina",
        "Bruno",
        "Sofia",
        "Rodrigo",
        "Laura",
        "Daniel",
        "Alice",
        "Vinícius",
        "Manuela"


    ];
    const lista_sobrenome=[
        "Silva",
        "Santos",
        "Oliveira",
        "Souza",
        "Rodrigues",
        "Ferreira",
        "Alves",
        "Pereira",
        "Lima",
        "Gomes",
        "Costa",
        "Ribeiro",
        "Martins",
        "Carvalho",
        "Almeida",
        "Lopes",
        "Soares",
        "Fernandes",
        "Vieira",
        "Barbosa",
        "Rocha",
        "Dias",
        "Nascimento",
        "Moreira",
        "Andrade",
        "Nunes",
        "Marques",
        "Machado",
        "Mendes",
        "Freitas"

    ];

    const listaCliente: Cliente[]=[]

    for (let i=0;i<500;i++){
        const nome= gerarNumAleatorio(0,lista_nome.length-1);
        const sobrenome= gerarNumAleatorio(0,lista_sobrenome.length-1);

        const nome_completo = lista_nome[nome]+" "+lista_sobrenome[sobrenome];

        const randomIdade = gerarNumAleatorio(21,50);

        const susa= gerarNumAleatorio(0,4);
        let vip= susa>3?true:false;

        listaCliente.push(new Cliente(i,nome_completo,randomIdade,vip));
        
    }

    return listaCliente;

}

