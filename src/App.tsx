import { useState } from "react";
import Contador from "./components/contador"
import Pesquisar from "./components/search-bar";
import Lista from "./components/tabela"
import useListaClientes from "./functions/func-listagem"


function App() {
  
  const listaCentral= useListaClientes();

  const [busca,setBusca] =useState("");


  return (
    <>
    <Pesquisar setBusca={setBusca}/>
    <Contador dadosClientes={listaCentral}/>
    
    <Lista dadosClientes={listaCentral} termoBusca={busca} />
    </>
  )
}

export default App
