
import { useContador } from "../functions/func-contador";

function Contador({dadosClientes}:{dadosClientes:any}){
    const {qnt_Cliente,qnt_Vip,total_percent}= useContador({dadosClientes});



    return(
        <div>
            <p>Total : {qnt_Cliente} || {total_percent}%</p>
            <p>Vips: {qnt_Vip}</p>
        </div>
    )

}

export default Contador