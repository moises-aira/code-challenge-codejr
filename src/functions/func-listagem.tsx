import { useState, useEffect } from "react";
import Comanda from "../classes/class-comanda";

function useListaClientes() {
    const [listaComanda, setListaComanda] = useState<Comanda[]>([]);
    const [statusConexao, setStatusConexao] = useState<"conectado" | "conectando" | "erro">("conectando");

    useEffect(() => {
        let socket: WebSocket;
        let nTentativas = 0;

        function conectar() {
            setStatusConexao("conectando");
            socket = new WebSocket("ws://localhost:3333");

            socket.onopen = () => {
                console.log("🔌 Conectado via WebSocket!");
                setStatusConexao("conectado");
                nTentativas = 0; 
            };

            socket.onmessage = (event) => {
                try {
                    const dadosVindosDoServidor = JSON.parse(event.data);
                    const novaComandaReal = new Comanda(dadosVindosDoServidor.cliente, dadosVindosDoServidor.produto);
                    novaComandaReal.cliente.entrada = new Date().toLocaleTimeString("pt-BR");
                    setListaComanda((listaAnterior) => [...listaAnterior, novaComandaReal]);
                } catch (error) {
                    console.error("Erro ao processar dados:", error);
                }
            };

            socket.onclose = () => {
                setStatusConexao("erro");
                console.log("🔌 Conexão perdida. Tentando reconectar em 5s...");
                setTimeout(() => {
                    nTentativas++;
                    if (nTentativas < 10) conectar(); 
                }, 5000);
            };

            socket.onerror = () => {
                setStatusConexao("erro");
            };
        }

        conectar();

        return () => {
            if (socket) socket.close();
        };
    }, []);

    return { listaComanda, statusConexao };
}

export default useListaClientes;

// codigo auxiliado por IA
//antigo codigo da func-listagem, integrava um live-feed do prórpio frontend, sem o uso de (IA)

