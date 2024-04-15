const yourAtackPoints = document.getElementById('attackPoints');
const initBtn = document.getElementById('initGame');
const cabeçaimages = ["cabeçaCapivara.", "image2.jpg", "image3.jpg"]; // Substitua pelos nomes reais das suas imagens

function generateattackPoints(){
    return Math.floor(Math.random()* 500) + 1;
}

function selectRandomImage(){
    const randomNumber = Math.floor(Math.random() * cardImages.length);
    const selectedImage = cardImages[randomNumber];
    return selectedImage;
}
