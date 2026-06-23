

interface Prop{
    setBusca: (texto: string) => void;
}

function Pesquisar({setBusca}:Prop){
    return(
    <div>
        <input type="text" onChange={(e)=> setBusca(e.target.value)} placeholder="Pesquise um nome"></input>
    </div>
    )
        
} 

export default Pesquisar