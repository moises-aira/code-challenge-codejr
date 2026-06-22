# Relatório de Desenvolvimento - Code Challenge

Este documento registra o processo de planejamento, tomada de decisão e arquitetura usada para o desafio de 1 semana para a vaga de **DEV2-FrontEnd da CODE[] Jr**.

# Requisitos Técnicos
- **Framework**: React, Angular ou Vue;
- **Linguagem**: TypeScript (Obrigatória);
- **Arquitetura Real-Time**: Construir um mecanismo Front-End que injete novos clientes e atualize as métricas em um determinado tempo, simulando um Live Feed;
- **Convenção de Projeto**: kebab-case;

# Contexto do Desenvolvedor
Este projeto foi desenvolvido por um estudante do **1º período de Ciência da Computação**. Até o momento de início deste projeto (20/06/2026), a única linguagem com a qual tive contato acadêmico foi o **Java**.

Por ser um ambiente completamente diferente dos conhecimentos desenvolvidos durante o primeiro semestre acadêmico, tomei a liberdade de utilizar ferramentas de Inteligência Artificial para me auxiliar na sintaxe do **TypeScript** e no aprendizado de novas ferramentas sugeridas para o desafio, como o **React**, **HTML** e **CSS**. Toda a lógica aplicada e a organização deste projeto foram realizadas por mim.

# Arquitetura e Estruturação de Pastas
- `./src/components/classes`: Classes utilizadas para a criação dos objetos do sistema.
- `./src/styles`: Arquivos de estilização global ou de módulos.

# Desafios e Tomada de Decisões

## **20/06/2026 (Início)** - Aprendendo HTML
- Como o ambiente Front-End é totalmente novo e o prazo para execução é curto, decidi fracionar o aprendizado dos requisitos. Iniciei focando na estruturação com HTML e nos fundamentos do TypeScript. Utilizei o Gemini para sugerir pequenos exercícios práticos e validar a sintaxe da nova linguagem.
- **Desafios enfrentados**: A semântica do HTML exige por ser meu primeiro contato com marcação web.

## **21/06/2026** - Adaptação aos Requisitos e Curva de Aprendizado
- Continuei os estudos sobre HTML e Typescript.
- Assisti a vídeos introdutórios sobre React.
- **Desafios enfrentados**: Apesar de o TypeScript se assemelhar ao Java em alguns aspectos de tipagem, recorri frequentemente à documentação e à IA para identificar erros de compilação.

## **22/06/2026** - Criação de Classes e Live Feed
- Criação das classes para Clientes, Comandas e Produtos.
- Desenvolvimento de uma função para gerar uma lista inicial de 500 clientes com dados aleatórios.
- Implementação de um filtro funcional (via botão) para listar apenas clientes VIPs.
- Construção da lógica do Live Feed para atualização em tempo real.
- Início deste registro de documentação.
- Criação do repositório no GitHub e envio dos primeiros commits.
- **Desafios enfrentados**: Compreender o funcionamento e o ciclo de vida dos *Hooks* do React (como `useState` e `useEffect`) está sendo o maior desafio técnico até o momento.