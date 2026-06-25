import { useState,useEffect ,useMemo} from "react";
import CriaComanda from "./func-cria-comanda";
import Comanda from "../classes/class-comanda";

function useListaClientes(){
    const [listaComanda,setListaComanda]=useState<any[]>([]);
    const [cont,setIndice]=useState(0)
    const listaAuxiliar = useMemo(() => CriaComanda(), [])
    useEffect(()=> {
         if (cont>=listaAuxiliar.length)return
        
        //A cada 3 segundos 1 cliente é passado da listaAuxiliar para a listaClientes
        const intervalo=setTimeout(() => {
            
            


            const comandaAntiga = listaAuxiliar[cont];

            // a entrada é registrada no momento que o cliente passa para a lista do live feed
            const clienteAtualizado = {
                ...comandaAntiga.cliente,
                entrada: new Date().toLocaleTimeString("pt-BR")
            };


           const proximo_comanda = new Comanda(
                clienteAtualizado, 
                comandaAntiga.produto 
            );

           setListaComanda((listaAnterior)=>[...listaAnterior,proximo_comanda]);

           setIndice((contAnterior)=>(contAnterior+1));


        },3000);

        return () => clearTimeout(intervalo);

    },[cont,listaAuxiliar]);
    
    return listaComanda;
}

export default useListaClientes