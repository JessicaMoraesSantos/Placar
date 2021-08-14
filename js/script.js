
const nomeTimeA = prompt('Digite o nome do time A: ');
const nomeTimeB = prompt('Digite o nome do time B: ');

const nomeA_HTML = document.getElementById('nomeTimeA');
const nomeB_HTML = document.getElementById('nomeTimeB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;
let pontosPorSetA = [];
let pontosPorSetB = [];
let totalDePontosA = 0;
let totalDePontosB = 0;

pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;

pontoA_HTML.addEventListener('click', function () {
    //o que estiver aqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
})

pontoB_HTML.addEventListener('click', function () {
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
})

function verificarFimDoSet() {
    if (pontoA >= 21 && pontoA - pontoB >=2) {
        alert('Time A venceu o set');
        setA++;
        setA_HTML.innerText = setA;
        salvarEZerarPlacar();
        verificarFimDoJogo();
    }
    if (pontoB >= 21 && pontoB - pontoA >= 2) {
        alert('Time B venceu o set');
        setB++;
        setB_HTML.innerText = setB;
        pontosPorSetB.push(pontoB);
        salvarEZerarPlacar();
        verificarFimDoJogo();
    }
}

function verificarFimDoJogo () {
    if (setA == 2) {
        //time A ganhou o jogo
        for (let item of pontosPorSetA) {
            totalDePontosA = totalDePontosA + item;
        }
        alert(`${nomeTimeA} venceu o jogo fazendo o total de ${totalDePontosA} pontos!`);
    }
    if (setB == 2) {
        //time B ganhou o jogo
        for (let item of pontosPorSetA) {
            totalDePontosB = totalDePontosB + item;
        }
        alert(`${nomeTimeB} venceu o jogo fazendo o total de ${totalDePontosB} pontos!`);
    }
}

function salvarEZerarPlacar() {
    //salvar a pontuação do set nos arrays
    pontosPorSetA.push(pontoA);
    pontosPorSetB.push(pontoB);

    //zerar a pontuação de cada set
    pontoA = 0;
    pontoB = 0;

    //atualizar na tela
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
}