# Decisões técnicas
- **HTML, CSS e JS puros:** exigência do projeto; fácil de executar e explicar, sem build.
- **SPA com rotas por hash:** navegação sem servidor e sem recarregar a página.
- **Separação dados/lógica/interface:** `logic.js` não usa DOM, o que permite testes em Node.
- **LocalStorage:** suficiente para histórico e tema; sem cadastro, sem dados pessoais, funciona offline. Limitação: dados ficam só no navegador do usuário.
- **Conteúdo sem estatísticas:** evita números não verificados; remete às fontes institucionais.
- **Acessibilidade:** link de pular conteúdo, foco visível, `aria-*` no quiz e no menu, respeito a `prefers-reduced-motion`.
