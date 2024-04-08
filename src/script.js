const yourAtackPoints = document.getElementById('attackPoints');
const initBtn = document.getElementById('initGame');

function generateattackPoints(){
    return Math.floor(Math.random()* 500) + 1;
}

function addpoint(){
    const newPoint = generateattackPoints();
    yourAtackPoints.textContent = newPoint;
}

initBtn.addEventListener('click', addpoint);