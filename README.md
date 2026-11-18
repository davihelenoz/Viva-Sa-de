# VivaSaúde — Outubro Rosa e Novembro Azul

Sistema web educativo sobre câncer de mama (Outubro Rosa) e saúde masculina/câncer de próstata (Novembro Azul). Trabalho Final de Curso — Técnico em Desenvolvimento de Sistemas.

> Este sistema possui finalidade exclusivamente educativa e não substitui consultas, exames, diagnósticos ou orientações de profissionais de saúde.

## Funcionalidades
Página inicial, páginas Outubro Rosa e Novembro Azul (com mitos e verdades), quiz de 12 perguntas, resultado com revisão, histórico com exclusão confirmada, referências, tema claro/escuro, menu mobile e layout responsivo.

## Tecnologias
HTML5, CSS3 e JavaScript puro (sem frameworks, sem build). Persistência em LocalStorage.

## Estrutura
```
vivasaude/
├── index.html        # estrutura e carregamento dos scripts
├── css/style.css     # estilos, temas e responsividade
├── js/data.js        # conteúdo educativo, perguntas e referências
├── js/logic.js       # regras puras: pontuação, validação, histórico
├── js/app.js         # telas, rotas (hash) e eventos
├── tests/tests.js    # testes automatizados (Node)
└── docs/             # requisitos, casos de uso, modelagem, protótipos, testes, decisões, evidências
```

## Como executar
Não há instalação. Abra `index.html` no navegador. Opcional, com servidor local: `python3 -m http.server 8000` e acesse http://localhost:8000.

## Testes
Requer Node.js: `node tests/tests.js` (testa a lógica e os dados). Testes de interface estão em `docs/testes.md` como roteiro manual.

## Persistência
Chaves do LocalStorage: `vs:hist` (lista JSON de `{d, hits, total}`) e `vs:theme` (`light`/`dark`). Nenhum dado pessoal é coletado.

## Fontes
INCA, Ministério da Saúde, OMS, Sociedade Brasileira de Mastologia e Sociedade Brasileira de Urologia (links na página Referências). O conteúdo é um resumo e deve ser conferido nas fontes antes da apresentação.
