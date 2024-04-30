// Passando as variáveis
const intellpoints = document.getElementById('intellpoints');
const agilitPoints = document.getElementById('agilitPoints');
const strengthPoints = document.getElementById('strengthPoints');
const cabecah = document.getElementById('cabeca');
const corpoh = document.getElementById('corpo');
const pernah = document.getElementById('perna');
const cabecae = document.getElementById('cabecaInimigo');
const corpoe = document.getElementById('corpoInimigo');
const pernae = document.getElementById('pernaInimigo');
const enemysStregthPoints = document.getElementById('enemysStregthPoints');
const enemysIntellPoints = document.getElementById('enemysIntellPoints');
const enemyagilitPoints = document.getElementById('enemyagilitPoints');
const yourAccessory1 = document.getElementById('acessorio1');
const yourAccessory2 = document.getElementById('acessorio2');
const yourAccessory3 = document.getElementById('acessorio3');
const enemyacessory1 = document.getElementById('acessorio1Ene');
const enemyacessory2 = document.getElementById('acessorio2Ene');
const enemyacessory3 = document.getElementById('acessorio3Ene');
let yourPoints = document.getElementById('meusPontos');
let enemypoints = document.getElementById('PontosDoinimigo');
const initBtn = document.getElementById('initGame');

// Passando as imagens
const cabeca = [
    'src/imgs/atores/cabeçaCapivara.png',
    'src/imgs/atores/cabeçaJacare.png',
    'src/imgs/atores/passaroCabeça.png',
    'src/imgs/atores/cabeçaSapo.png'
];

const corpo = [
    'src/imgs/atores/capivaraCorpo.png',
    'src/imgs/atores/jacaréCorpo.png',
    'src/imgs/atores/sapoCorpo.png',
    'src/imgs/atores/passaroCorpo.png'
];

const perna = [
    'src/imgs/atores/capivaraPerna.png',
    'src/imgs/atores/sapoPerna.png',
    'src/imgs/atores/passaroPerna.png',
    'src/imgs/atores/jacarePerna.png'
];

const acessorios = [
    'src/imgs/acessorios/assasFadas.png',
    'src/imgs/acessorios/assasMorcego.png',
    'src/imgs/acessorios/cachecol.png',
    'src/imgs/acessorios/chapeu.png',
    'src/imgs/acessorios/colar.png',
    'src/imgs/acessorios/escudo.png',
    'src/imgs/acessorios/espada.png',
    'src/imgs/acessorios/galochas.png',
    'src/imgs/acessorios/picareta.png',
    'src/imgs/acessorios/skate.png',
    'src/imgs/acessorios/tocha.png',
    'src/imgs/acessorios/varinha.png'
];


function generatePoints() {
    return Math.floor(Math.random() * 500);
}

function addPoints(element) {
    const newPoint = generatePoints();
    element.textContent = newPoint;
}
//passando as imagens
function setImage(element, images) {
    let randomIndex = Math.floor(Math.random() * images.length);
    element.src = images[randomIndex];
}

// Verificando vitória
function victory() {
    setTimeout(function() {
        const yourPointsTotal = parseInt(intellpoints.textContent) + parseInt(agilitPoints.textContent) + parseInt(strengthPoints.textContent);
        const enemyPointsTotal = parseInt(enemysStregthPoints.textContent) + parseInt(enemysIntellPoints.textContent) + parseInt(enemyagilitPoints.textContent);

        if (yourPointsTotal >= enemyPointsTotal) {
            yourPoints.textContent = parseInt(yourPoints.textContent) + 1;
            alert("Você venceu! Sortudo!");
        } else if (yourPointsTotal === enemyPointsTotal) {
            yourPoints.textContent = parseInt(yourPoints.textContent) + 1;
            enemypoints.textContent = parseInt(enemypoints.textContent) + 1;
            alert("Empate");
        } else {
            enemypoints.textContent = parseInt(enemypoints.textContent) + 1;
            alert("Você perdeu! Azarado!");
        }
    }, 1500);
}

// Configurações dos botões
initBtn.addEventListener('click', function() {
    addPoints(strengthPoints);
    addPoints(intellpoints);
    addPoints(agilitPoints);
    setImage(cabecah, cabeca);
    setImage(corpoh, corpo);
    setImage(pernah, perna);
    addPoints(enemysStregthPoints);
    addPoints(enemysIntellPoints);
    addPoints(enemyagilitPoints);
    setImage(cabecae, cabeca);
    setImage(corpoe, corpo);
    setImage(pernae, perna);
    setImage(yourAccessory1, acessorios);
    setImage(yourAccessory2, acessorios);
    setImage(yourAccessory3, acessorios);
    setImage(enemyacessory1, acessorios);
    setImage(enemyacessory2, acessorios);
    setImage(enemyacessory3, acessorios);
    victory();
});
