//Selecionando os elementos do HTML
const contadorEl = document.getElementById('contador');

const btnaumentar = document.getElementById ('btn-aumentar');

const btndiminuir = document.getElementById ('btn-diminuir');

const btnrecetar = document.getElementById ('btn-resetar');


// variável que guarda o valor do contador
let contador = 1000000 ;


//Função para atualizar o contador na tela 
function atualizarContador() {
    contadorEl.textContent = contador;
}

// eventos de clique nos botões 
btnaumentar.addEventListener('click', () => {
    // atualizando a variáriavel contador a cada clique
    contador++;
    // atualizando a tela do usuário
    atualizarContador();
});

btndiminuir.addEventListener('click', () => {
    contador--

    atualizarContador();
});

btnrecetar.addEventListener('click', () => {
    contador= 0;
    atualizarContador(); 
});