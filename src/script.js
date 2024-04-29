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

// Passando as configurações do inimigo
const cabeca = [
    'imgs/atores/cabeçaCapivara.png',
    'imgs/atores/cabeçaJacare.png',
    'imgs/atores/passaroCabeça.png',
    'imgs/atores/cabeçaSapo.png'
];

const corpo = [
    'imgs/atores/capivaraCorpo.png',
    'imgs/atores/jacaréCorpo.png',
    'imgs/atores/sapoCorpo.png',
    'imgs/atores/passaroCorpo.png'
];

const perna = [
    'imgs/atores/capivaraPerna.png',
    'imgs/atores/sapoPerna.png',
    'imgs/atores/passaroPerna.png',
    'imgs/atores/jacarePerna.png'
];

const acessorios = [
    'imgs/acessorios/assasFadas.png',
    'imgs/acessorios/assasMorcego.png',
    'imgs/acessorios/cachecol.png',
    'imgs/acessorios/chapeu.png',
    'imgs/acessorios/colar.png',
    'imgs/acessorios/escudo.png',
    'imgs/acessorios/espada.png',
    'imgs/acessorios/galochas.png',
    'imgs/acessorios/picareta.png',
    'imgs/acessorios/skate.png',
    'imgs/acessorios/tocha.png',
    'imgs/acessorios/varinha.png'
];

// Gerando os pontos de ataque
function generatePoints() {
    return Math.floor(Math.random() * 500);
}

function addPoints(element) {
    const newPoint = generatePoints();
    element.textContent = newPoint;
}

// Passando as imagens
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
