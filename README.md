# Relatório de Desenvolvimento - Code Challenge

Este documento registra o processo de planejamento, tomada de decisão e arquitetura usada para o desafio de 1 semana **DEV2-FrontEnd da CODE[] Jr**.

# Cenário e Objetivo
A Drzyy é uma casa de shows de altíssima rotatividade. A gerência precisa de precisão cirúrgica para monitorar o fluxo de clientes presentes, controlar o acesso da lista VIP e gerenciar o consumo (comandas) de forma ágil. Diferente de sistemas tradicionais, a operação não para: os dados de entrada e saída mudam a cada segundo. 

A missão foi desenvolver uma Single Page Application (SPA) administrativa, projetada para reagir a um fluxo de dados em tempo real e lidar com formulários transacionais. O objetivo é avaliar a capacidade de construir interfaces componentizadas, gerenciar estados complexos e garantir a performance da UI sob atualizações constantes.

# Requisitos Técnicos
- **Framework**: React, Angular ou Vue;
- **Linguagem**: TypeScript (Obrigatória);
- **Arquitetura Real-Time**: Construir um mecanismo Front-End que injete novos clientes e atualize as métricas em um determinado tempo, simulando um Live Feed;
- **Convenção de Projeto**: kebab-case;

# Funcionalidades Obrigatórias
- Live DashBoard;
- Tabela Reativa;
- Painel de Comanda;

# Extra: BackEnd com WebSockets
O desafio extra consiste em construir uma pequena API Backend (em Node.js, Python, etc.) que emita os dados da portaria da Drzyy em tempo real através de WebSockets (ex: Socket.io) ou Server-Sent Events (SSE).O uso de Inteligencia Artificial para o BackEnd é incorajado.

# Contexto do Desenvolvedor
Este projeto foi desenvolvido por um estudante após finalizar o **1º período de Ciência da Computação**. Até o momento de início deste projeto (20/06/2026), a única linguagem com a qual tive contato acadêmico foi o **Java**.

Por ser um ambiente completamente diferente dos conhecimentos desenvolvidos durante o primeiro semestre acadêmico, tomei a liberdade de utilizar ferramentas de Inteligência Artificial para me auxiliar na sintaxe do **TypeScript** e no aprendizado de novas ferramentas sugeridas para o desafio, como o **React**, **HTML** e **CSS**. Toda a lógica aplicada e a organização deste projeto foram realizadas por mim.

# Arquitetura e Estruturação de Pastas
- `./src/classes`: Classes utilizadas para a criação dos objetos do sistema.
- `./src/components`: Components criados aderir ao Modulo principal.
- `./src/functions`: Funções criadas para facilitar o compreendimento do codigo.
- `./src/styles`: Arquivos de estilização global ou de módulos.

O sistema é projetado para integrar e gerenciar clientes em tempo real. Inicialmente, durante a fase de testes do ecossistema Front-End, utilizei uma função local em TypeScript para gerar clientes e comandas com dados aleatórios de forma estática. Contudo, conforme os requisitos obrigatórios e o desafio extra propostos, essa simulação local foi totalmente substituída pela integração reativa com um servidor Backend via WebSockets.

# Desafios e Tomada de Decisões

## **20/06/2026 (Início)** - Aprendendo HTML
- Como o ambiente Front-End é totalmente novo e o prazo para execução é curto, decidi fracionar o aprendizado dos requisitos. Iniciei focando na estruturação com HTML e nos fundamentos do TypeScript. Utilizei o Gemini para sugerir pequenos exercícios práticos e validar a sintaxe da nova linguagem.
- **Desafios enfrentados**: 
    - **Primeiro contato com HTML**: A semântica do HTML exige por ser meu primeiro contato com marcação web.

## **21/06/2026** - Adaptação aos Requisitos e Curva de Aprendizado
- Continuei os estudos sobre HTML e Typescript.
- Assisti a vídeos introdutórios sobre React.
- **Desafios enfrentados**: 
    - **Dificuldade com a linguagem**: Apesar de o TypeScript se assemelhar ao Java em alguns aspectos de tipagem, recorri frequentemente à documentação e à IA para identificar erros de compilação.

## **22/06/2026** - Criação de Classes e Live Feed
- Criação das classes para Clientes, Comandas e Produtos. Antes da integração com o WebSockets.
- Desenvolvimento de uma função para gerar uma lista inicial de 500 clientes com dados aleatórios.
- Implementação de um filtro funcional (via botão) para listar apenas clientes VIPs.
- Construção da lógica do Live Feed para atualização em tempo real.
- Criei um registrador da hora de entrada de cada cliente
- Início deste registro de documentação.
- Criação do repositório no GitHub e envio dos primeiros commits.
- **Desafios enfrentados**: 
    - **Dificuldades com o React**: Compreender o funcionamento e o ciclo de vida dos *Hooks* do React (como `useState` e `useEffect`) está sendo o maior desafio técnico até o momento. 
    - **Lista de Clientes Desaparecendo**: Durante os testes, notei que quando a lista de clientes ultrapassava a marca de 500 registros, a tabela HTML parava de renderizar os dados corretamente. Para solucionar esse comportamento, implementei uma estrutura condicional (`if`). Agora, assim que o Live Feed atinge o limite de 500 clientes, o mecanismo interrompe o incremento de novos dados.

## **23/06/2026** - Criação da barra de pesquisa e Organização do código
- Reestruturação de funções, arquivos e pastas.
- Criação da exibição do total e percentual de clientes, e o total de VIPs
- Criação de Barra de pesquisa por nome
- **Desafios enfrentados**: 
    - **Refatoração do Live Feed**: Inicialmente, eu estava desenvolvendo o live feed dentro de uma única função, o que no futuro poderia tornar o meu código muito confuso. Por isso, o reestruturei, dividindo cada parte do live feed em funções isoladas para depois chamá-las na função principal.
    - **Dessincronizaçao dos Dados**: Enfrentei uma dessincronização dos dados com o que era exibido para o usuário. O código chamava uma função de listagem para cada componente, fazendo com que cada um trabalhasse com uma lista de clientes diferente. Para resolver isso, criei uma variável de lista global (estado compartilhado) para ser usada em cada módulo.
    - **Lógica de Filtragem**: Tive bastante trabalho para implementar a barra de pesquisa; no entanto, após a dificuldade, percebi que a sua lógica é bem simples.

## **24/06/2026** - Criando a comanda 
- Criação da comanda.
- Implementação da listagem de produtos dentro da comanda.
- Refatoração e reajuste em todas as classes do projeto.
- Finalização de todos os elementos essenciais da estrutura do site, restando apenas a estilização com CSS.
- **Desafios enfrentados**:
    - **Imprevisto na criação da comanda**: O *live feed* estava sendo desenvolvido utilizando uma lista de objetos do tipo `Cliente`. Porém, percebi que para criar a comanda seria necessária uma lista que instanciasse comandas, e não clientes. Esse imprevisto exigiu uma revisão completa do código, alterando onde as classes e listas de `Cliente` eram usadas para `Comanda`.
    - **Problema na criação de produtos**: Dentro da comanda, é possível declarar o nome e o preço do produto. Entretanto, o sistema não estava aceitando produtos com nomes ou valores iguais durante a listagem. Ou seja, se tivéssemos um "Café (R$ 5,00)" e um "Bolo (R$ 5,00)", a entrada não era registrada na comanda por conta do valor similar, apesar dos nomes diferentes. Para resolver isso, atribuí um ID único à classe `Produto`. Dessa forma, a diferenciação passou a ser feita pelo ID, permitindo o cadastro de produtos com nomes ou valores idênticos.
    - **Erros "invisíveis"**: Em vários momentos o código aparentava estar correto e sem erros no console, mas nada era exibido na tela, deixando o site inteiramente em branco. Esses comportamentos inesperados foram constantes — tanto na lógica quanto na montagem do TSX/HTML —, exigindo bastante tempo de depuração (*debugging*) para encontrar as soluções.
    - **Estruturação de componentes**: A estruturação HTML atual dos componentes ainda não está totalmente adequada, o que torna o posicionamento e a exibição dos elementos na tela insatisfatórios. Pretendo refatorar essa marcação assim que iniciar a etapa de estilização com o CSS.

## **25/06/2026** - Resolução de Vazamento de Escopo nas Comandas
- Correção de bugs de escopo e isolamento nas comandas.
- **Desafios enfrentados**:
    - **Vazamento de Referência de Itens**: Foi detectado um Erro onde os produtos adicionados por um cliente (ex: Café) eram replicados instantaneamente nas comandas de todos os outros usuários do sistema. O erro acontecia por conta de referências compartilhadas na memória. Para corrigir, passei a instanciar arrays independentes de produtos atrelados unicamente ao ID do cliente logado na comanda correspondente, isolando os consumos com sucesso.

## **26/06/2026** - Estilização e integração com WebSockets
- Estilização completa da tabela reativa e linhas de dados.
- Customização visual da barra de pesquisa e estados focados.
- Formatação dos contadores (Clientes Comuns e VIPs).
- Design do Painel de Comandas.
- integração do FrontEnd com o BackEnd Websokets
- **Desafios enfrentados**:
    - Sendo a área com a qual tive menor afinidade natural no processo, o CSS demandou um fluxo constante de pesquisa e apoio de inteligência artificial para dominar conceitos como posicionamento de caixas e alinhamento de elementos. 
    - **Arquitetura de Rede (WebSockets)**: A integração de dados persistentes em tempo real foi complexa no início. Aproveitando a liberação do edital para o uso de IA nesta etapa do Backend, foquei meus esforços em compreender profundamente o funcionamento do protocolo `ws`, adaptando a minha lógica matemática de sorteio de clientes e o encapsulamento de classes para rodar nativamente no ambiente do servidor Node.js.

# Como Executar e Testar a Aplicação

Para testar a aplicação com o fluxo de dados em tempo real, você precisará rodar o **Servidor Backend (WebSocket)** e o **Frontend (React)** simultaneamente em dois terminais diferentes.

---

## 📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org) (Versão 18 ou superior)
- Um gerenciador de pacotes (o Node já vem com o `npm` por padrão)

---

## 🛠️ Passo 1: Executando o Servidor Live (Backend)
O servidor é responsável por simular a portaria da casa de shows, gerando combinações aleatórias de clientes e disparando-os via WebSocket na porta `3333`.

1. Abra um terminal na raiz do projeto.
2. Navegue até a pasta do servidor:
   ```bash
   cd servidor-live-ws
   ```
3. Instale a dependência de rede necessária (`ws`):
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   node server.js
   ```
*Você verá a mensagem: ` Servidor WebSocket rodando na porta 3333...` no terminal. Mantenha este terminal aberto.*

---

## 💻 Passo 2: Executando o Dashboard (Frontend)
O frontend se conectará automaticamente ao servidor local e começará a popular a tabela reativa de 4 em 4 segundos.

1. Abra um **novo terminal** (deixe o terminal do backend rodando em segundo plano).
2. Certifique-se de estar na raiz do projeto e instale as dependências do React/Vite:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento do frontend:
   ```bash
   npm run dev
   ```
4. O terminal exibirá um endereço local (geralmente `http://localhost:5173/`). Abra este link no seu navegador (preferencialmente Firefox ou Chrome).

---

# Considerações Finais do Projeto

Desenvolver uma aplicação desse porte em apenas uma semana foi um desafio extremamente gratificante. Vindo de um ambiente acadêmico focado em lógica pura (como manipulação estruturada de matrizes e objetos Java), o contato com o desenvolvimento Web reativo abriu novas perspectivas. 

A minha percepção a respeito do ecossistema React e do ecossistema de tipagem do TypeScript mudou drasticamente ao longo desses dias: o receio e o sentimento de estar perdido no início deram lugar à satisfação de ver uma interface complexa reagindo em tempo real e de forma coordenada. Busquei manter o código o mais limpo, componentizado e documentado possível dentro dos meus conhecimentos atuais.

O uso de Inteligência Artificial foi fundamental como um tutor de sintaxe em tempo real e durante o BackEnd com WebSocket, acelerando a curva de aprendizado em marcação web (HTML/CSS) e me ensinando a ler logs de erro complexos do navegador. Contudo, a engenharia da aplicação — entender que dados compartilhados pertencem ao componente Pai (App.tsx), gerenciar a imutabilidade dos estados e arquitetar o fluxo de rede do servidor para o cliente — exigiu raciocínio lógico focado e os fundamentos de POO assimilados no meu primeiro período de Ciência da Computação.