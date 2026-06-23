import { useState,useEffect ,useMemo} from "react";
import { CriaClientes} from "../classes/clientes";

function useListaClientes(){
    const [listaClientes,setListaCliente]=useState<any[]>([]);
    const [cont,setIndice]=useState(0)
    const listaAuxiliar = useMemo(() => CriaClientes(), [])
    useEffect(()=> {
         if (cont>=listaAuxiliar.length)return
        
        //A cada 3 segundos 1 cliente é passado da listaAuxiliar para a listaClientes
        const intervalo=setTimeout(() => {
            
            

           const proximo_cliente={
            ...listaAuxiliar[cont],
             //Define a hora de entrada de cada cliente
            entrada : new Date().toLocaleTimeString("pt-BR")
           }

           setListaCliente((listaAnterior)=>[...listaAnterior,proximo_cliente]);

           setIndice((contAnterior)=>(contAnterior+1));


        },3000);

        return () => clearTimeout(intervalo);

    },[cont,listaAuxiliar]);
    
    return listaClientes;
}

export default useListaClientes