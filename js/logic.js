// Lógica pura (sem DOM): testável via Node e usada pelo navegador.
(function (root) {
  const KEY = 'vs:hist';
  const VS = {
    score(answers, correct) {
      const hits = answers.filter((a, i) => a === correct[i]).length;
      const total = correct.length;
      return { hits, total, wrong: total - hits, pct: Math.round((hits / total) * 100) };
    },
    canAdvance(answers, i) { return answers[i] !== null && answers[i] !== undefined; },
    feedback(pct) {
      if (pct >= 80) return 'Excelente! Você domina bem o tema.';
      if (pct >= 50) return 'Bom resultado! Revise as explicações abaixo.';
      return 'Continue aprendendo: leia as páginas das campanhas e tente de novo.';
    },
    load(store) { try { const v = store.getItem(KEY); return v ? JSON.parse(v) : []; } catch (e) { return []; } },
    save(store, r) {
      const h = VS.load(store); h.unshift(r);
      try { store.setItem(KEY, JSON.stringify(h)); return true; } catch (e) { return false; }
    },
    clear(store) { try { store.setItem(KEY, '[]'); return true; } catch (e) { return false; } }
  };
  if (typeof module !== 'undefined') module.exports = VS; else root.VS = VS;
})(this);
