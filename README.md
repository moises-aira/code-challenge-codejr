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

# Contexto do Desenvolvedor
Este projeto foi desenvolvido por um estudante após finalizar o **1º período de Ciência da Computação**. Até o momento de início deste projeto (20/06/2026), a única linguagem com a qual tive contato acadêmico foi o **Java**.

Por ser um ambiente completamente diferente dos conhecimentos desenvolvidos durante o primeiro semestre acadêmico, tomei a liberdade de utilizar ferramentas de Inteligência Artificial para me auxiliar na sintaxe do **TypeScript** e no aprendizado de novas ferramentas sugeridas para o desafio, como o **React**, **HTML** e **CSS**. Toda a lógica aplicada e a organização deste projeto foram realizadas por mim.

# Arquitetura e Estruturação de Pastas
- `./src/classes`: Classes utilizadas para a criação dos objetos do sistema.
- `./src/components`: Components criados aderir ao Modulo principal.
- `./src/functions`: Funções criadas para facilitar o compreendimento do codigo.
- `./src/styles`: Arquivos de estilização global ou de módulos.

#### A. (Live Feed)

Este fluxo descreve o ciclo de vida dos dados simulados em tempo real, desde a entrada na memória até a renderização e filtragem:

[ Gerador de Dados (Mock) ]
(Gera Nome, Idade e Status aleatórios para o Cliente)
            │
            ▼
[ Instanciação de Comandas ]
(Modela o objeto Comanda, vinculando Cliente e Consumo de Produtos)
            │
            ▼
[ Motor do Live Feed (setInterval) ]
(Injeta 1 nova comanda a cada 3 segundos no Estado Global)
            │
            ▼
[ Estado Centralizado (Source of Truth) ]
(Lista de comandas atualizada em tempo real)
            │
            ▼
[ Interface Reativa (Tabela HTML) ]
(Renderiza os dados na tela do usuário)
            │
            ▼
[ Camada de Filtragem]
 ┌──────────┴──────────┐
 ▼                     ▼
[Botão Filtro VIP]   [Barra de Pesquisa por Nome]

#### B. (Gerenciamento de Consumo)

Este fluxo mapeia a jornada de experiência do usuário  ao interagir de forma ativa com o painel para registrar consumo nas comandas:

[ Seleção de Cliente ] ───► (Identificação do usuário através da Tabela Reativa)
            │
            ▼
[ Abertura de Comanda ] ──► (Invocação do módulo/modal visual da comanda correspondente)
            │
            ▼
[ Entrada de Dados ] ────► (Operador digita o Nome e o Preço do produto consumido)
            │
            ▼
[ Registro de Produto ] ──► (Instanciação do objeto Produto com ID único e push no array da Comanda)
            │
            ▼
[ Atualização da UI ] ───► (Recálculo instantâneo dos totais de consumo do cliente exibidos na tela)


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
- Criação das classes para Clientes, Comandas e Produtos.
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

## **26/06/2026** - Estilização e Polimento de Interface
- Estilização completa da tabela reativa e linhas de dados.
- Customização visual da barra de pesquisa e estados focados.
- Formatação dos contadores (Clientes Comuns e VIPs).
- Design do Painel de Comandas.
- **Desafios enfrentados**:
    - Sendo a área com a qual tive menor afinidade natural no processo, o CSS demandou um fluxo constante de pesquisa e apoio de inteligência artificial para dominar conceitos como posicionamento de caixas e alinhamento de elementos. 

# Considerações Finais do Projeto

Desenvolver uma aplicação desse porte em apenas uma semana foi um desafio extremamente gratificante. Vindo de um ambiente acadêmico focado em lógica pura (como manipulação estruturada de matrizes e objetos Java), o contato com o desenvolvimento Web reativo abriu novas perspectivas. 

A minha percepção a respeito do ecossistema React e do ecossistema de tipagem do TypeScript mudou drasticamente ao longo desses dias: o receio e o sentimento de estar perdido no início deram lugar à satisfação de ver uma interface complexa reagindo em tempo real e de forma coordenada. Busquei manter o código o mais limpo, componentizado e documentado possível dentro dos meus conhecimentos atuais.