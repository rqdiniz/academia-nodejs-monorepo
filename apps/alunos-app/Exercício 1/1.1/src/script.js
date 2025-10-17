const clientes = [
  { id: "961479", conta: "PT500001230", nome: "NOME AGUAS UNIPESSOAL, LDA", nif: "507889320", telemovel: "912345678", tipo: "EMPRESA" },
  { id: "3763209", conta: "PT500004560", nome: "NOME ASSOCIAÇÃO UNIPESSOAL, LDA", nif: "205778340", telemovel: "965321987", tipo: "EMPRESA" },
  { id: "129748", conta: "PT500009870", nome: "NOME AUTOPEÇAS UNIPESSOAL, LDA", nif: "187445100", telemovel: "913220876", tipo: "EMPRESA" },
];

const listaResultados = document.getElementById("listaResultados");
const campoPesquisa = document.getElementById("campoPesquisa");
const botoesFiltro = document.querySelectorAll(".filtro-btn");

let filtroAtivo = "cliente";

function normalizar(txt) {
  return String(txt).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function mostrarResultados(lista) {
  if (!lista || lista.length === 0) {
    listaResultados.innerHTML = `<li class="p-4 text-cinzento">Sem resultados</li>`;
    return;
  }

  listaResultados.innerHTML = lista.map(c => `
    <li>
      <article class="bg-cartao rounded-lg p-4 border border-borda shadow-custom hover:shadow-md transition">
        <h2 class="text-base font-bold mb-1">${c.nome}</h2>
        <div class="flex flex-wrap gap-2 text-sm text-cinzento items-center">
          <span>Nº cliente: ${c.id}</span>
          <span>•</span>
          <span>NIF: ${c.nif}</span>
          <span class="ml-auto bg-[#e6f0ff] text-[#1d4ed8] font-semibold text-xs py-1 px-2 rounded-full">${c.tipo}</span>
        </div>
      </article>
    </li>
  `).join("");
}


function atualizarPesquisa() {
  const termo = normalizar(campoPesquisa.value.trim());
  if (!termo) return mostrarResultados([]);

  const mapaFiltros = {
    cliente: "id",
    conta: "conta",
    nif: "nif",
    nome: "nome",
    telemovel: "telemovel"
  };

  const campo = mapaFiltros[filtroAtivo];
  const resultado = clientes.filter(c => normalizar(c[campo]).includes(termo));
  mostrarResultados(resultado);
}


campoPesquisa.oninput = atualizarPesquisa;


botoesFiltro.forEach(botao => {
  botao.onclick = function() {
    botoesFiltro.forEach(b => {
      b.classList.remove("bg-white", "border", "border-borda", "text-texto", "shadow-custom");
      b.classList.add("bg-transparent", "text-cinzento");
    });
    botao.classList.add("bg-white", "border", "border-borda", "text-texto", "shadow-custom");
    filtroAtivo = botao.dataset.filtro;

    atualizarPesquisa();
  };
});

mostrarResultados([]);

campoPesquisa.focus();