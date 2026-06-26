
import { useState } from "react";
import Comanda from "../classes/class-comanda";
import "../styles/comanda.css"
import Produto from "../classes/class-produto";

interface ComandaProp{
    comanda:Comanda;
    fechar:()=>void;
}



function ModalComanda({comanda: comanda,fechar}:ComandaProp){
    
    const [nome_produto,setNome_produto]=useState("")
    const [preco_produto,setPreco_produto]=useState("")
    const [listaProduto, setListaProduto] = useState<Produto[]>(comanda.produto);
    const CadastraProduto=()=>{
        const preco_num = parseFloat(preco_produto);

        if (!nome_produto.trim() ||isNaN(preco_num)|| preco_num<0) {
            alert("Por favor, digite o nome e um preço válido.");
            return;
        }
        const novo_produto=new Produto(nome_produto,preco_num,comanda.cliente.id)

        comanda.produto=[...comanda.produto,novo_produto]

        setListaProduto(comanda.produto);
        setNome_produto("")
        setPreco_produto("")
    }
   
    //const listaProduto = comanda.produto;

    const totalComanda = comanda.calcularTotal()
    
    return(
        
        <div className="comanda-filezuda">
            <header>
                <h3><strong>{comanda.cliente.nome} 
                    <br></br>
                    {comanda.cliente.status? "VIP" : 'Comum' }
                <br></br>
                {comanda.cliente.idade} anos</strong></h3>
            </header>
            <h3></h3>
            <button onClick={fechar} style={{ 
                position: "fixed",
                top: "40px",
                right: "50px",}}>X</button>

            <input type="text" placeholder="Produto: (ex: café)" value={nome_produto} onChange={(e)=> setNome_produto(e.target.value) }></input>
            <input type="number" placeholder="Preço: (ex: 5,91)" value={preco_produto}onChange={(e)=> setPreco_produto(e.target.value)}></input>
            <br></br>
            <button onClick={CadastraProduto} className="botao-registrar">Registrar</button>
            <div>
                <strong><h4>Itens do Peidio</h4></strong>
                {
                    listaProduto.map((prod) => ( comanda.cliente.id===prod.id ?(
                        <p key={prod.id}>
                            {prod.nome} - R$ {prod.preco.toFixed(2) }
                        </p>)
                    :(
                         <p>Nenhum item adicionado</p>
                    )
                ))}
            </div>

                <footer>
                    <span>Total da Conta:</span>
                    <strong>R$ {totalComanda.toFixed(2)}</strong>
                </footer>
        </div>
    )

}

export default ModalComanda