

interface Prop{
    setBusca: (texto: string) => void;
}

function Pesquisar({setBusca}:Prop){
    return(
    <div className="container">
        <input type="text" className="barra-pesquisa" onChange={(e)=> setBusca(e.target.value)} placeholder="Pesquise um nome"></input>
    </div>
    )
        
} 

export default Pesquisar