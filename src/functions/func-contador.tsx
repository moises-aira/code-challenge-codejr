
export function useContador({dadosClientes}:{dadosClientes:any[]}){
    const lista = dadosClientes;
    const qnt_Cliente=lista.length
    const qnt_Vip=lista.filter((cliente: any) =>cliente.status).length


    //porcentagem
    const x = (qnt_Cliente/500)*100
    const total_percent = x.toFixed(2)
    //const vip_percent 

    
    return {qnt_Cliente ,qnt_Vip,total_percent}
}


