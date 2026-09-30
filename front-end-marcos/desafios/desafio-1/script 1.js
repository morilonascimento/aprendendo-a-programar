// ===== 1. Pegando os elementos do HTML =====
const form = document.getElementById("formPessoa");
const listaPessoas = document.getElementById("listaPessoas");
const mensagemVazia = document.getElementById("mensagemVazia");
const total = document.getElementById("total");

// ===== 2. Dados =====
// Nome da "gaveta" onde os dados ficam guardados no navegador
const CHAVE = "pessoas";

// Lista (array) que guarda todas as pessoas
let pessoas = carregarPessoas();

// ===== 3. Funções de armazenamento =====

// Busca os dados salvos no navegador (localStorage)
function carregarPessoas() {
  const dadosSalvos = localStorage.getItem(CHAVE);
  // Se existir algo salvo, converte de texto para lista; senão, lista vazia
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}

// Salva a lista no navegador (transforma em texto)
function salvarPessoas() {
  localStorage.setItem(CHAVE, JSON.stringify(pessoas));
}

// ===== 4. Função auxiliar =====

// Converte "2000-12-31" para "31/12/2000"
function formatarData(dataISO) {
  if (!dataISO) return "-";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

// ===== 5. Mostrar as pessoas na tela =====
function mostrarPessoas() {
  // Limpa a tabela antes de desenhar de novo
  listaPessoas.innerHTML = "";

  // Para cada pessoa da lista, cria uma linha na tabela
  pessoas.forEach(function (pessoa) {
    const linha = document.createElement("tr");

    // Cria as colunas com os dados
    const dados = [
      pessoa.nome,
      pessoa.email,
      pessoa.telefone || "-",
      formatarData(pessoa.nascimento)
    ];

    dados.forEach(function (valor) {
      const coluna = document.createElement("td");
      coluna.textContent = valor;
      linha.appendChild(coluna);
    });

    // Coluna com o botão de excluir
    const colunaAcao = document.createElement("td");
    const botao = document.createElement("button");
    botao.textContent = "Excluir";
    botao.className = "btn-excluir";
    botao.addEventListener("click", function () {
      excluirPessoa(pessoa.id);
    });
    colunaAcao.appendChild(botao);
    linha.appendChild(colunaAcao);

    listaPessoas.appendChild(linha);
  });

  // Atualiza o contador
  total.textContent = pessoas.length;

  // Mostra ou esconde a mensagem de "lista vazia"
  mensagemVazia.style.display = pessoas.length === 0 ? "block" : "none";
}

// ===== 6. Cadastrar uma pessoa =====
form.addEventListener("submit", function (evento) {
  // Impede que a página recarregue ao enviar o formulário
  evento.preventDefault();

  // Cria um objeto com os dados digitados
  const novaPessoa = {
    id: Date.now(), // número único baseado na hora atual
    nome: document.getElementById("nome").value.trim(),
    email: document.getElementById("email").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    nascimento: document.getElementById("nascimento").value
  };

  pessoas.push(novaPessoa); // adiciona na lista
  salvarPessoas();          // guarda no navegador
  mostrarPessoas();         // atualiza a tela
  form.reset();             // limpa o formulário
});

// ===== 7. Excluir uma pessoa =====
function excluirPessoa(id) {
  // Mantém apenas as pessoas com id diferente do que foi clicado
  pessoas = pessoas.filter(function (pessoa) {
    return pessoa.id !== id;
  });

  salvarPessoas();
  mostrarPessoas();
}

// ===== 8. Ao abrir a página, mostra o que já estava salvo =====
mostrarPessoas();