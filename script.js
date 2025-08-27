// CADASTRE AQUI seus exames oficiais:
const EXAMES = [
    { nome:"FATOR RH", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Determina se seu sangue é Rh positivo ou negativo.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"HEMOGRAMA", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia a quantidade e qualidade das células sanguíneas.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"VHS", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta processos inflamatórios no corpo.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"HEMOGLOBINA GLICADA", preparo:"Jejum de 8 a 12 horas (água liberada).", horario:"06:30 às 07:00", explicacao:"Mostra o controle da glicose nos últimos meses.", endereco:"Unidade de saúde mais próxima da sua casa", aviso:"SE VOCÊ FAZ PARTE DO PROGRAMA PANG, LEMBRE-SE DE REALIZAR ESSE EXAME A CADA 3 MESES."},
    { nome:"GLICEMIA", preparo:"Jejum de 8 a 12 horas (água liberada).", horario:"06:30 às 07:00", explicacao:"Mede o nível de açúcar no sangue.", endereco:"Unidade de saúde mais próxima da sua casa", aviso:"SE VOCÊ FAZ PARTE DO PROGRAMA PANG, LEMBRE-SE DE REALIZAR ESSE EXAME A CADA 3 MESES."},
    { nome:"COLESTEROL TOTAL", preparo:"Jejum de 8 a 12 horas (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia o risco de doenças cardiovasculares.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"TRIGLICERIDEOS", preparo:"Jejum de 8 a 12 horas (água liberada).", horario:"06:30 às 07:00", explicacao:"Mede a quantidade de gordura no sangue.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"HDL", preparo:"Jejum de 8 a 12 horas (água liberada).", horario:"06:30 às 07:00", explicacao:"Colesterol bom, protege o coração.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"LDL", preparo:"Jejum de 8 a 12 horas (água liberada).", horario:"06:30 às 07:00", explicacao:"Colesterol ruim, pode causar problemas cardíacos.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"SÓDIO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia equilíbrio de líquidos e função renal.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"POTÁSSIO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Importante para músculos e nervos.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"URÉIA", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia função renal e metabolismo de proteínas.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"CREATININA", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia função renal e hepática.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"TGO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta lesões no fígado e músculos.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"TGP", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia a saúde do fígado.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"GAMA GT", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Indica doenças hepáticas e consumo de álcool.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"AMILASE", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia função pancreática e salivares.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"TSH", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia função da tireoide.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"T3", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Mede hormônio T3 da tireoide.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"T4 LIVRE", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia função da tireoide e metabolismo.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"FAN - FATOR ANTINUCLEO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta doenças autoimunes como lúpus.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"FR - FATOR REUMATOIDE", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Auxilia no diagnóstico de artrite reumatoide.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"FA - FOSFATOSE ALCALINA", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia doenças ósseas e hepáticas.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"FERRITINA", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Mede reservas de ferro no organismo.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"FERRO SÉRICO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia ferro circulante no sangue.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"PROLACTINA", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Mede níveis do hormônio prolactina.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"FSH", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia função ovariana e testicular.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"LH", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Mede níveis do hormônio luteinizante.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"PSA", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia saúde da próstata.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"PSA LIVRE", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia riscos de doenças na próstata.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"PARASITOLÓGICO PPF 1", preparo:"Coletar uma quantidade pequena de material (água liberada).", horario:"06:30 às 07:00", explicacao:"Exame específico, acompanha distúrbios renais.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"PARASITOLÓGICO PPF 2", preparo:"Coletar uma quantidade pequena de material (água liberada).", horario:"06:30 às 07:00", explicacao:"Exame específico, acompanha distúrbios renais.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"PARASITOLÓGICO PPF 3", preparo:"Coletar uma quantidade pequena de material (água liberada).", horario:"06:30 às 07:00", explicacao:"Exame específico, acompanha distúrbios renais.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"URINA I", preparo:"Realizar a coleta da 1ª urina do dia (água liberada).", horario:"06:30 às 07:00", explicacao:"Analisa composição da urina.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"UROCULTURA", preparo:"Jejum de 8 a 12 horas (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta infecções urinárias.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"ANTIBIOGRAMA", preparo:"Realizar a coleta da 1ª urina do dia (água liberada).", horario:"06:30 às 07:00", explicacao:"Verifica quais antibióticos combatem a bactéria.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"URINA 24H PROTEINA", preparo:"Coletar durante 24 horas toda a quantidade de urina feita no dia e manter na porta da geladeira para conservação (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia perda de proteínas pela urina.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"CALCIOURINARIO 24", preparo:"Coletar durante 24 horas toda a quantidade de urina feita no dia e manter na porta da geladeira para conservação  (água liberada).", horario:"06:30 às 07:00", explicacao:"Mede quantidade de cálcio na urina em 24h.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"URINA MICROALBUMINA ISOLADA", preparo:"Realizar a coleta da 1ª urina do dia (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta pequenas quantidades de proteína na urina.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"ACIDO URICO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia risco de gota e problemas renais.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"ACIDO FOLICO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia níveis de ácido fólico no sangue.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"BETA HCG", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta gravidez.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"CALCIDIOL", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia níveis de vitamina D.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"CALCIO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia níveis de cálcio no sangue.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"COOMBS INDIRETO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta anticorpos no sangue.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"SECREÇÃO VAGINAL", preparo:"Evite relações sexuais 3 dias antes da coleta, evite o uso de cremes 48 horas antes da coleta (água liberada).", horario:"06:30 às 07:00", explicacao:"Analisa presença de infecções vaginais.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"MAGNÉSIO", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia níveis de magnésio no corpo.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"ESTREPTO B SECRECAO VAGINAL", preparo:"Evite relações sexuais 3 dias antes da coleta, evite o uso de cremes 48 horas antes da coleta  (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta bactéria Streptococcus B.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"ESTREPTO B SECRECAO ANAL", preparo:"Evite relações sexuais 3 dias antes da coleta, evite o uso de cremes 48 horas antes da coleta  (água liberada).", horario:"06:30 às 07:00", explicacao:"Detecta bactéria Streptococcus B no ânus.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"VITAMINA B 12", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia níveis de vitamina B12.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"VITAMINA D", preparo:"Jejum não necessário (água liberada).", horario:"06:30 às 07:00", explicacao:"Avalia níveis de vitamina D.", endereco:"Unidade de saúde mais próxima da sua casa" },
    { nome:"🔶 ACTH", preparo:"4 horas de jejum (2 horas para menores de 2 anos).", horario:"09:00 às 14:00", explicacao:"Avalia a função da glândula adrenal e a produção do hormônio ACTH.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 CURVA GLICÊMICA", preparo:"8 horas de jejum. Não fumar no dia do exame.", horario:"07:00", explicacao:"Avalia a resposta do organismo à ingestão de glicose, importante para diagnóstico de diabetes.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 TESTE DE TOLERÂNCIA À LACTOSE", preparo:"8 horas de jejum. Não fumar no dia. Levar acompanhante maior de 18 anos.", horario:"07:00", explicacao:"Verifica a capacidade do organismo de digerir lactose.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 COBRE URINÁRIO", preparo:"Coletar urina por 24h em frasco retirado na UBS.", horario:"07:00", explicacao:"Avalia a quantidade de cobre eliminada na urina, útil no diagnóstico da Doença de Wilson e intoxicação por cobre.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 COBRE SÉRICO", preparo:"4 horas de jejum.", horario:"13:00", explicacao:"Mede a quantidade de cobre no sangue, ajudando no diagnóstico de distúrbios metabólicos.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 TRAB", preparo:"4 horas de jejum.", horario:"10:00", explicacao:"Investiga doenças autoimunes da tireoide, como Doença de Graves.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 ALDOLASE", preparo:"4 horas de jejum (2 horas para menores de 2 anos).", horario:"09:00 às 14:00", explicacao:"Auxilia no diagnóstico de doenças musculares e hepáticas.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 DOSAGEM DE AMÔNIA", preparo:"8 horas de jejum. Não fumar 24h antes e evitar contato com fumantes.", horario:"13:00", explicacao:"Avalia o nível de amônia no sangue, importante em doenças hepáticas e distúrbios metabólicos.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 COMPLEMENTO C2, C3, C4 E C5", preparo:"4 horas de jejum.", horario:"13:00", explicacao:"Avalia o sistema imunológico, útil no diagnóstico de doenças autoimunes.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 MICOLÓGICO", preparo:"Não usar esmaltes, acetona por 15 dias. Não usar hidratantes e não lavar a região no dia.", horario:"10:00 às 14:00", explicacao:"Detecta fungos em pele, unhas ou cabelo.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 CÁLCIO IÔNICO", preparo:"4 horas de jejum.", horario:"11:00", explicacao:"Avalia o nível de cálcio livre no sangue, importante em distúrbios ósseos, renais e hormonais.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 DOSAGEM DE GASTRINA", preparo:"4 horas de jejum.", horario:"11:00", explicacao:"Avalia a produção do hormônio gastrina, útil no diagnóstico de úlceras e tumores gástricos.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 PARATORMÔNIO", preparo:"4 horas de jejum.", horario:"09:00 às 14:00", explicacao:"Mede o hormônio da paratireoide, essencial para o metabolismo do cálcio.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 COAGULOGRAMA (TAP/TTP)", preparo:"4 horas de jejum.", horario:"13:00", explicacao:"Avalia a coagulação do sangue, importante antes de cirurgias ou em sangramentos anormais.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 CARIÓTIPO", preparo:"Jejum não necessário.", horario:"10:00 às 14:00 (Segunda à Quinta)", explicacao:"Analisa os cromossomos para detectar alterações genéticas.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 ESPERMOGRAMA", preparo:"Abstinência sexual de 3 a 5 dias.", horario:"14:00", explicacao:"Avalia a qualidade do sêmen, útil em casos de infertilidade.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 PEPTÍDEO C", preparo:"4 horas de jejum.", horario:"13:00", explicacao:"Auxilia na avaliação da função das células beta do pâncreas.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 DOSAGEM DE RENINA", preparo:"4 horas de jejum. Suspender alguns medicamentos com orientação médica.", horario:"13:00", explicacao:"Avalia a atividade do sistema renina-angiotensina, importante na regulação da pressão arterial.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 CH50", preparo:"Jejum não necessário.", horario:"09:00 às 14:00", explicacao:"Avalia a atividade total do sistema complemento no sangue.", endereco:"RUA PHILIPPE DE VITRY, n°280" },
    { nome:"🔶 DOSAGEM DE ZINCO", preparo:"4 horas de jejum.", horario:"09:00 às 14:00", explicacao:"Mede o nível de zinco, importante para funções imunológicas e metabólicas.", endereco:"RUA PHILIPPE DE VITRY, n°280" }
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

document.addEventListener('DOMContentLoaded'
