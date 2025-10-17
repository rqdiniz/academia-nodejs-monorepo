const alunos = [
  { id: "A001", nome: "Joana Silva", email: "joana@academia.com", curso: "Node.js Avançado" },
  { id: "A002", nome: "Carlos Mendes", email: "carlos@academia.com", curso: "Node.js Iniciação" },
  { id: "A003", nome: "Rita Costa", email: "rita@academia.com", curso: "APIs com Express" },
];

const listaResultados = document.getElementById("listaResultados");
const campoPesquisa = document.getElementById("campoPesquisa");
const botoesFiltro = document.querySelectorAll(".filtro-btn");

let filtroAtivo = "id";

function normalizar(txt) {
  return String(txt).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function mostrarResultados(lista) {
  if (!lista || lista.length === 0) {
    listaResultados.innerHTML = `<li class="p-4 text-cinzento">Sem resultados</li>`;
    return;
  }

  listaResultados.innerHTML = lista.map(a => `
    <li>
      <article class="bg-cartao rounded-lg p-4 border border-borda shadow-custom hover:shadow-md transition">
        <h2 class="text-base font-bold mb-1">${a.nome}</h2>
        <div class="flex flex-wrap gap-2 text-sm text-cinzento items-center">
          <span>ID: ${a.id}</span>
          <span>•</span>
          <span>Email: ${a.email}</span>
          <span class="ml-auto bg-[#e6f0ff] text-[#1d4ed8] font-semibold text-xs py-1 px-2 rounded-full">${a.curso}</span>
        </div>
      </article>
    </li>
  `).join("");
}

function atualizarPesquisa() {
  const termo = normalizar(campoPesquisa.value.trim());
  if (!termo) return mostrarResultados([]);

  const resultado = alunos.filter(a => normalizar(a[filtroAtivo]).includes(termo));
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
