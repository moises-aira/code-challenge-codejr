import { useState,useEffect } from "react";
import { CriaClientes, Cliente } from "../classes/clientes";

//crio uma lista auxiliar para passar os clientes registrados nela para a listaClientes, simulando uma entrada
const listaAuxiliar =CriaClientes();
let listaClientes:Cliente[]=[];
let j= 0

function Lista(){
    
    const [segundos,setSegunds]=useState(0);

    //botão para filtrar os CLientes Vips
    const [somenteVips,setSomenteVips] = useState(false);
    

    useEffect(()=> {

        
        
        //A cada 3 segundo 1 cliente é passado da listaAuxiliar para a listaClientes
        const intervalo=setInterval(()=>{
            setSegunds((segundoAnterior)=>segundoAnterior+1)

           listaClientes.push(listaAuxiliar[j])
        
            j++;

        },3000);

        return () => clearInterval(intervalo);

    },[]);
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
