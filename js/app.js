const $ = s => document.querySelector(s), app = $('#app');
const ok = Q.map(q => q[2]);
const fresh = () => ({ i: 0, a: Array(Q.length).fill(null), err: false, last: null });
let st = fresh();
const safe = { getItem: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, setItem: (k, v) => localStorage.setItem(k, v) };

function home() {
  app.dataset.c = '';
  app.innerHTML = `<span class="tag">Conscientização em saúde</span><h1>Informação confiável para cuidar de você.</h1>
<p class="mut" style="max-width:640px">A VivaSaúde reúne conteúdo educativo sobre o Outubro Rosa e o Novembro Azul e um quiz para testar o que você aprendeu.</p>
<p><a class="btn pri" href="#quiz">Fazer o quiz</a></p>
<div class="grid"><a class="card c" data-c="rosa" href="#outubro-rosa"><h2 style="margin-top:0">Outubro Rosa</h2><p class="mut">Câncer de mama: sinais, prevenção e diagnóstico precoce.</p><strong style="color:var(--ac)">Ler a página</strong></a>
<a class="card c" data-c="azul" href="#novembro-azul"><h2 style="margin-top:0">Novembro Azul</h2><p class="mut">Saúde masculina e câncer de próstata.</p><strong style="color:var(--ac)">Ler a página</strong></a></div>
<h2>Por que conscientizar?</h2><p>Informação ajuda a reconhecer sinais, desfazer mitos e buscar acompanhamento profissional no momento certo.</p>
<div class="aviso">Este sistema possui finalidade exclusivamente educativa e não substitui consultas, exames, diagnósticos ou orientações de profissionais de saúde.</div>`;
}
function campanha(k) {
  const c = CAMP[k]; app.dataset.c = k;
  app.innerHTML = `<h1 style="color:var(--ac)">${c.t}</h1><p class="mut">${c.s}</p>
<div class="aviso">Conteúdo educativo. Não substitui avaliação profissional.</div>
${c.secs.map(s => `<section class="card c" style="margin:14px 0"><h2 style="margin-top:0;font-size:1.3rem">${s[0]}</h2><p style="margin-bottom:0">${s[1]}</p></section>`).join('')}
<h2>Mitos e verdades</h2><div class="grid">${c.mitos.map(m => `<div class="card"><p><strong>“${m[0]}”</strong></p><p><span class="tag">${m[1]}</span></p><p class="mut">${m[2]}</p></div>`).join('')}</div>
<p style="margin-top:28px"><a class="btn pri" href="#quiz">Testar conhecimentos</a> <a class="btn" href="#referencias">Ver fontes</a></p>`;
}
function quiz() {
  app.dataset.c = ''; const q = Q[st.i], p = Math.round(st.i / Q.length * 100);
  app.innerHTML = `<p class="mut">Pergunta ${st.i + 1} de ${Q.length}</p><div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>
<h1 style="font-size:1.6rem">${q[0]}</h1><div role="radiogroup" aria-label="Alternativas">${q[1].map((o, j) => `<button class="opt ${st.a[st.i] === j ? 'sel' : ''}" role="radio" aria-checked="${st.a[st.i] === j}" data-j="${j}">${String.fromCharCode(65 + j)}) ${o}</button>`).join('')}</div>
${st.err ? '<p class="err" role="alert">Selecione uma alternativa para continuar.</p>' : ''}
<p><button id="prev" ${st.i ? '' : 'disabled'}>Voltar</button> <button class="pri" id="next">${st.i === Q.length - 1 ? 'Finalizar' : 'Avançar'}</button></p>`;
  app.querySelectorAll('.opt').forEach(b => b.onclick = () => { st.a[st.i] = +b.dataset.j; st.err = false; quiz(); });
  $('#prev').onclick = () => { st.i--; st.err = false; quiz(); };
  $('#next').onclick = () => {
    if (!VS.canAdvance(st.a, st.i)) { st.err = true; quiz(); return; }
    if (st.i < Q.length - 1) { st.i++; st.err = false; quiz(); return; }
    const r = VS.score(st.a, ok); st.last = r;
    try { VS.save(safe, { d: new Date().toISOString(), hits: r.hits, total: r.total }); } catch (e) {}
    location.hash = '#resultado';
  };
}
function resultado() {
  app.dataset.c = ''; const r = st.last;
  if (!r) { location.hash = '#quiz'; return; }
  app.innerHTML = `<h1>Resultado</h1><p class="big">${r.hits}/${r.total} · ${r.pct}%</p><p>Acertos: <strong>${r.hits}</strong> · Erros: <strong>${r.wrong}</strong></p><p>${VS.feedback(r.pct)}</p>
<h2>Revisão</h2>${Q.map((q, i) => { const c = st.a[i] === ok[i]; return `<div class="card" style="margin:10px 0"><p><strong>${i + 1}. ${q[0]}</strong></p><p>Sua resposta: <span class="${c ? '' : 'err'}">${q[1][st.a[i]]}</span> (${c ? 'correta' : 'incorreta'})</p>${c ? '' : `<p>Correta: <strong>${q[1][ok[i]]}</strong></p>`}<p class="mut">${q[3]}</p></div>`; }).join('')}
<p><button class="pri" id="re">Refazer o quiz</button> <a class="btn" href="#inicio">Voltar ao início</a> <a class="btn" href="#historico">Ver histórico</a></p>`;
  $('#re').onclick = () => { st = fresh(); location.hash = '#quiz'; };
}
function historico() {
  app.dataset.c = ''; const h = VS.load(safe);
  app.innerHTML = '<h1>Histórico</h1>' + (h.length ? `<div class="tw"><table><tr><th>Data</th><th>Pontuação</th><th>Acertos</th><th>Questões</th></tr>${h.map(r => `<tr><td>${new Date(r.d).toLocaleString('pt-BR')}</td><td>${r.hits}/${r.total}</td><td>${Math.round(r.hits / r.total * 100)}%</td><td>${r.total}</td></tr>`).join('')}</table></div><p><button id="del">Excluir histórico</button></p>` : '<p class="mut">Nenhum resultado salvo ainda. <a href="#quiz">Faça o quiz</a>.</p>');
  const d = $('#del'); if (d) d.onclick = () => { if (confirm('Excluir todo o histórico? Esta ação não pode ser desfeita.')) { VS.clear(safe); historico(); } };
}
function referencias() {
  app.dataset.c = '';
  app.innerHTML = `<h1>Referências</h1><p>O conteúdo é um resumo educativo. Para orientações atualizadas, consulte as instituições:</p><ul>${REFS.map(r => `<li><a href="${r[1]}" target="_blank" rel="noopener">${r[0]}</a></li>`).join('')}</ul><div class="aviso">Este sistema possui finalidade exclusivamente educativa e não substitui consultas, exames, diagnósticos ou orientações de profissionais de saúde.</div>`;
}
const routes = { inicio: home, 'outubro-rosa': () => campanha('rosa'), 'novembro-azul': () => campanha('azul'), quiz, resultado, historico, referencias };
function route() {
  const k = location.hash.slice(1) || 'inicio'; (routes[k] || home)();
  $('#lk').classList.remove('open'); $('#mb').setAttribute('aria-expanded', 'false');
  document.querySelectorAll('nav a.l').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + k));
  window.scrollTo(0, 0);
}
$('#mb').onclick = () => { const o = $('#lk').classList.toggle('open'); $('#mb').setAttribute('aria-expanded', o); };
try { const t = localStorage.getItem('vs:theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
$('#tb').onclick = () => {
  const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'), n = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = n; try { localStorage.setItem('vs:theme', n); } catch (e) {}
};
addEventListener('hashchange', route); route();
