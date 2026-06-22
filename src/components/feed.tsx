import { useState,useEffect } from "react";
import { CriaClientes, Cliente } from "../classes/clientes";


const listaClientes =CriaClientes();

function Lista(){
    
    //botão para filtrar os CLientes Vips
    const [somenteVips,setSomenteVips] = useState(false);
    //
    const cliente_filtrados= somenteVips? listaClientes.filter(cliente=>cliente.status):listaClientes;


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
                </tr>
            </thead>
            <tbody>
                {cliente_filtrados.map((user) =>(
                    <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.idade}</td>
                            <td>{user.status==true? "Vip": "Comum"}</td>
                    </tr>
                 ))}
            </tbody>
        </table>
        </section>
    ) 

}

export default Lista
