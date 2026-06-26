
import { useContador } from "../functions/func-contador";
import "../styles/tabela.css"

function Contador({dadosClientes}:{dadosClientes:any}){
    const {qnt_Cliente,qnt_Vip,total_percent}= useContador({dadosClientes});



    return(
        <div className="bloco-contadores">
            <p className="contador">Total : {qnt_Cliente} / 500 | {total_percent}%</p>
            <p className="contador-vip">Vips: {qnt_Vip}</p>
        </div>
    )

}

export default Contador