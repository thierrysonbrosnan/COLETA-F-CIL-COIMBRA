// CADASTRE AQUI seus exames oficiais:
const EXAMES = [
  {
    id: "hemograma",
    nome: "Hemograma Completo",
    local: "Laboratório Central — Rua Exemplo, 123 – Bairro, Cidade/UF",
    preparo: [
      "Não é necessário jejum.",
      "Evitar atividade física intensa 24h antes.",
      "Levar documento com foto e guia do exame."
    ]
  },
  {
    id: "glicemia-jejum",
    nome: "Glicemia em Jejum",
    local: "Laboratório Central — Rua Exemplo, 123 – Bairro, Cidade/UF",
    preparo: [
      "Jejum de 8 a 12 horas (água liberada).",
      "Manter uso de medicamentos habituais, salvo orientação médica.",
      "Evitar bebidas alcoólicas 24h antes."
    ]
  },
  {
    id: "urina-tipo1",
    nome: "Urina Tipo 1 (EAS)",
    local: "Laboratório Central — Rua Exemplo, 123 – Bairro, Cidade/UF",
    preparo: [
      "Coletar a primeira urina da manhã (jato médio).",
      "Higienizar a região genital antes da coleta.",
      "Entregar no laboratório em até 2 horas após a coleta."
    ]
  }
];

// --------- Lógica da página (não precisa mexer) ---------
const $lista = document.getElementById('lista');
const $tpl = document.getElementById('tpl-exame');
const $busca = document.getElementById('busca');
const $contador = document.getElementById('contador');

const normalizar = (t) => (t||"").toLowerCase()
  .normalize('NFD').replace(/\p{Diacritic}/gu, '');

function filtrar(term){
  const t = normalizar(term);
  return EXAMES.filter(e => !t ||
    normalizar(e.nome).includes(t) ||
    normalizar(e.id).includes(t));
}

function render(lista){
  $lista.innerHTML = '';
  if (lista.length === 0){
    const vazio = document.createElement('div');
    vazio.className = 'card';
    vazio.textContent = 'Nenhum exame encontrado. Tente outro termo.';
    $lista.appendChild(vazio);
  } else {
    lista.forEach(e => {
      const node = $tpl.content.cloneNode(true);
      const root = node.querySelector('.exame');
      root.dataset.id = e.id;

      node.querySelector('.exame-nome').textContent = e.nome;
      node.querySelector('.local').textContent = e.local;

      const ul = node.querySelector('.preparo');
      e.preparo.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        ul.appendChild(li);
      });

      $lista.appendChild(node);
    });
  }
  $contador.textContent = `${lista.length} exame(s) encontrado(s)`;
}

function init(){
  // busca inicial (se quiser permitir ?q=, descomente abaixo)
  // const q = new URLSearchParams(location.search).get('q') || '';
  // $busca.value = q;
  // render(filtrar(q));

  render(EXAMES);

  $busca.addEventListener('input', (e) => {
    render(filtrar(e.target.value));
  });
}

document.addEventListener('DOMContentLoaded', init);
