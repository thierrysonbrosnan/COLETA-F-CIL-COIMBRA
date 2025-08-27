// ====================== CONFIGURAÇÃO AIRTABLE ======================
const apiKey = "patM3GelxBq5b1fHX.30808768c75a3064fad67945aabb2310aed5310e9280b7d5e44f2ffca474a3d7";
const baseId = "appMkiznFKzIUWt1G";
const tableName = "Exames";

// ====================== ELEMENTOS DA PÁGINA ======================
const $lista = document.getElementById('lista');
const $tpl = document.getElementById('tpl-exame');
const $busca = document.getElementById('busca');
const $contador = document.getElementById('contador');

// ====================== FUNÇÕES AUXILIARES ======================
const normalizar = (t) => (t||"").toLowerCase()
  .normalize('NFD').replace(/\p{Diacritic}/gu, '');

// Filtrar exames pelo termo de busca
function filtrar(term, lista) {
  const t = normalizar(term);
  return lista.filter(e => !t ||
    normalizar(e.nome).includes(t) ||
    normalizar(e.id).includes(t));
}

// Renderizar lista de exames na página
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
      ul.innerHTML = ''; // limpa preparo antigo
      e.preparo.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        ul.appendChild(li);
      });

      $lista.appendChild(node);

      // Registra visualização do exame no Airtable
      root.addEventListener('click', () => registrarAcesso(e.id, e.totalAcessos || 0));
    });
  }
  $contador.textContent = `${lista.length} exame(s) encontrado(s)`;
}

// ====================== FUNÇÕES AIRTABLE ======================

// Buscar exames do Airtable
async function carregarExamesDoAirtable() {
  const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` }
  });
  const data = await response.json();

  // Transformar dados do Airtable para o formato do site
  return data.records.map(record => ({
    id: record.id,
    nome: record.fields["Nome do Exame"] || "",
    local: record.fields["Endereço"] || "",
    preparo: record.fields["Preparo"] || [],
    totalAcessos: record.fields["Total de Acessos"] || 0
  }));
}

// Registrar visualização do exame (incrementa Total de Acessos)
async function registrarAcesso(recordId, totalAtual) {
  const url = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;
  try {
    await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fields: { "Total de Acessos": totalAtual + 1 } })
    });
  } catch (err) {
    console.error("Erro ao registrar acesso:", err);
  }
}

// ====================== INICIALIZAÇÃO ======================
async function init(){
  const EXAMES = await carregarExamesDoAirtable();
  render(EXAMES);

  $busca.addEventListener('input', (e) => {
    render(filtrar(e.target.value, EXAMES));
  });
}

document.addEventListener('DOMContentLoaded', init);

