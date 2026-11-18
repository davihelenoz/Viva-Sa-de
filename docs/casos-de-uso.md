# Casos de uso
Ator: **Visitante**.
Casos: UC01 Ler conteúdo das campanhas · UC02 Responder o quiz · UC03 Ver resultado e revisão · UC04 Consultar histórico · UC05 Excluir histórico · UC06 Alternar tema · UC07 Ver referências.

```mermaid
flowchart LR
V((Visitante)) --> UC1[Ler campanhas]
V --> UC2[Responder quiz]
UC2 --> UC3[Ver resultado]
V --> UC4[Consultar histórico]
UC4 --> UC5[Excluir histórico]
V --> UC6[Alternar tema]
V --> UC7[Ver referências]
```
