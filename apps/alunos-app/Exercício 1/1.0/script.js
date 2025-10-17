// Array Mock
const clientes = [
  { id: "C-00123", conta: "PT500001230", nome: "Global Solutions Lda", nif: "507889320", telemovel: "912345678", tipo: "EMPRESA" },
  { id: "C-00456", conta: "PT500004560", nome: "Marques & Filhos", nif: "205778340", telemovel: "965321987", tipo: "EMPRESA" },
  { id: "C-00987", conta: "PT500009870", nome: "Ana Costa", nif: "187445100", telemovel: "913220876", tipo: "INDIVIDUAL" }
];

const listaResultados = document.getElementById("listaResultados");
const formularioPesquisa = document.getElementById("formularioPesquisa");
const campoPesquisa = document.getElementById("campoPesquisa");
const botoesFiltro = document.querySelectorAll(".filtro-btn");

let filtroAtivo = "cliente"; // Filtro Default

// Listar resultados
function mostrarResultados(lista) {
  if (!lista || lista.length === 0) {
    listaResultados.innerHTML = `<li style="padding:20px;color:#6b7280;">Sem resultados</li>`;
    return;
  }

  listaResultados.innerHTML = lista.map(cliente => `
    <li>
      <article class="cartao">
        <div class="cartao-corpo">
          <h2 class="nome">${cliente.nome}</h2>
          <div class="meta">
            <div>Nº cliente: ${cliente.id}</div>
            <div>•</div>
            <div>NIF: ${cliente.nif}</div>
            <div style="flex:1"></div>
            <div class="etiqueta">${cliente.tipo}</div>
          </div>
        </div>
      </article>
    </li>
  `).join("");
}

// Listar vazio por defeito
mostrarResultados([]);

// pesquisa pelo filtro selecionado
formularioPesquisa.addEventListener("submit", e => {
  e.preventDefault();
  const termo = campoPesquisa.value.trim().toLowerCase();
  if (!termo) return mostrarResultados([]);

  const mapaFiltros = {
    cliente: "id",
    conta: "conta",
    nif: "nif",
    nome: "nome",
    telemovel: "telemovel"
  };

  const campo = mapaFiltros[filtroAtivo];
  const resultado = clientes.filter(c => String(c[campo]).toLowerCase().includes(termo));
  mostrarResultados(resultado);
});

// Alterar filtro
botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    filtroAtivo = botao.dataset.filtro;
  });
});
