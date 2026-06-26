const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 3333 });
console.log("🚀 Servidor WebSocket rodando na porta 3333...");

let idContador = 1;

const nomesFalsos = [
  "Marcos Silva", "Julia Costa", "Roberto Souza", 
  "Fernanda Lima", "Amanda Rocha", "Lucas Melo", 
  "Gabriel Santos", "Patricia Alves", "Rodrigo Lima"
];

wss.on('connection', (ws) => {
  console.log("🔌 O aplicativo React se conectou ao canal!");

  const intervalo = setInterval(() => {
    
    const nomeAleatorio = nomesFalsos[Math.floor(Math.random() * nomesFalsos.length)];
    const idadeAleatoria = Math.floor(Math.random() * (50 - 18 + 1)) + 18; 
    const statusVipAleatorio = Math.random() < 0.4; 
    const horarioEntrada = new Date().toLocaleTimeString("pt-BR");

    const novaComandaEnvio = {
      cliente: {
        id: idContador++, 
        nome: nomeAleatorio,
        idade: idadeAleatoria,
        status: statusVipAleatorio,
        entrada: horarioEntrada // direto do bakend
      },
      produto: [] 
    };

    const dadosParaEnviar = JSON.stringify(novaComandaEnvio);

    if (ws.readyState === ws.OPEN) {
        console.log(`➡️ Enviando comanda para o React: ${novaComandaEnvio.cliente.nome} (ID: ${novaComandaEnvio.cliente.id})`);
        ws.send(dadosParaEnviar); 
    }

  }, 4000);

  ws.on('close', () => {
    console.log("🔌 O aplicativo React fechou a aba ou desconectou.");
    clearInterval(intervalo);
  });
});
