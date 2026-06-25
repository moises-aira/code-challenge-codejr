import { useState } from "react";
import ModalComanda from "./comanda";
import type Comanda from "../classes/class-comanda";

interface FiltroProp{
    dadosClientes:Comanda[];
    termoBusca:string
}

function Lista({dadosClientes, termoBusca}:FiltroProp){
    //botão para filtrar os CLientes Vips
    const [somenteVips,setSomenteVips] = useState(false);
    const lista= dadosClientes;

    const [clienteSelecionado, setClienteSelecionado] = useState<Comanda | null>(null);
    

    let cliente_filtrados= somenteVips? lista.filter((comanda:Comanda)=>comanda.cliente.status):lista;

     if (termoBusca.trim() !== "") {
        cliente_filtrados = cliente_filtrados.filter(comanda => 
            comanda.cliente.nome?.toLowerCase().includes(termoBusca.toLowerCase())
        );
    }

    return(
        <section> 
            <button onClick={() => setSomenteVips(!somenteVips)}>
                    {somenteVips? "Mostrar todos os Clientes": "Somente Vip"}
            </button>
            <br></br>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Status</th>
                    <th>Entrada</th>
                </tr>
            </thead>
            <tbody>
                {cliente_filtrados.map((comanda:Comanda) =>(
                    <tr key={comanda.cliente.id} 
                        onClick={()=> setClienteSelecionado(comanda)}
                        style={{ cursor: "pointer" }}
                    >
                            <td>{comanda.cliente.id}</td>
                            <td>{comanda.cliente.nome}</td>
                            <td>{comanda.cliente.idade}</td>
                            <td>{comanda.cliente.status==true? "Vip": "Comum"}</td>
                            <td>{comanda.cliente.entrada}</td>
                    </tr>
                 ))}
            </tbody>
        </table>
         {clienteSelecionado && (
             <ModalComanda 
                comanda={clienteSelecionado} 
                fechar={() => setClienteSelecionado(null)} 
             />
         )}
         </section>
    )}


export default Lista
