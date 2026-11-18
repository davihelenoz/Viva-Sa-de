# Modelagem
**Arquitetura:** `index.html` carrega `data.js` (dados), `logic.js` (regras puras) e `app.js` (interface e rotas por hash). Persistência via LocalStorage.

```mermaid
flowchart TD
UI[app.js: telas e eventos] --> L[logic.js: regras]
UI --> D[data.js: conteúdo e perguntas]
L --> LS[(LocalStorage)]
```
## Fluxo do quiz
```mermaid
flowchart TD
A[Pergunta] --> B{Respondeu?}
B -- Não --> E[Mostra erro] --> A
B -- Sim --> C{Última?}
C -- Não --> A
C -- Sim --> S[Calcula pontuação] --> H[Salva no histórico] --> R[Resultado]
```
## Navegação
```mermaid
flowchart LR
Inicio --> OR[Outubro Rosa] & NA[Novembro Azul] & Quiz & Hist[Histórico] & Ref[Referências]
Quiz --> Resultado --> Quiz
Resultado --> Hist
```
## Persistência
`vs:hist` = `[{d: ISO, hits: n, total: n}]`; `vs:theme` = `"light"|"dark"`.
