import { useState } from "react";
import { Cliente } from "../classes/clientes";

interface FiltroProp{
    dadosClientes:Cliente[];
    termoBusca:string
}

function Lista({dadosClientes, termoBusca}:FiltroProp){
    //botão para filtrar os CLientes Vips
    const [somenteVips,setSomenteVips] = useState(false);
    const lista= dadosClientes;

    let cliente_filtrados= somenteVips? lista.filter((cliente:Cliente)=>cliente.status):lista;

     if (termoBusca.trim() !== "") {
        cliente_filtrados = cliente_filtrados.filter(cliente => 
            cliente.nome?.toLowerCase().includes(termoBusca.toLowerCase())
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
                {cliente_filtrados.map((user:Cliente) =>(
                    <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.idade}</td>
                            <td>{user.status==true? "Vip": "Comum"}</td>
                            <td>{user.entrada}</td>
                    </tr>
                 ))}
            </tbody>
        </table>
        </section>
    ) 

}

export default Lista
