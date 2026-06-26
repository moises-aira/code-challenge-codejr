import { useState } from "react";
import Contador from "./components/contador"
import Pesquisar from "./components/search-bar";
import Lista from "./components/tabela"
import useListaClientes from "./functions/func-listagem"
import "./styles/app.css"


function App() {
  

  const [busca,setBusca] =useState("");
  const { listaComanda, statusConexao } = useListaClientes();


  return (
    <>
    <div className="fundo">
    {statusConexao === "conectando" && <div style={{ backgroundColor: "#3498db", color: "#fff", padding: "10px", textAlign: "center", borderRadius: "6px" }}>🔄 Conectando ao Live Feed...</div>}
    {statusConexao === "erro" && <div style={{ backgroundColor: "#e74c3c", color: "#fff", padding: "10px", textAlign: "center", borderRadius: "6px" }}>⚠️ Conexão perdida com a Portaria. Tentando reconectar...</div>}
    <Pesquisar setBusca={setBusca}/>
    <Contador dadosClientes={listaComanda}/>
    
    <Lista dadosClientes={listaComanda} termoBusca={busca} />
    </div>
    </>
  )
}

export default App
