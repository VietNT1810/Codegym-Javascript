let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let scale = 20;

let rows = canvas.height / scale;
let columns = canvas.width / scale;

let snake;
let fruit;
let snakeSpeed = 100;

let score = 0;
let result = document.querySelector('.result');
let startMenu = document.getElementById("startMenu");
let gameOverMenu = document.getElementById("gameOver");

//Start game button
let startButton = document.getElementById('startButton');

startButton.addEventListener('click', function () {
    startMenu.style.visibility = "hidden";
    setup();
});

//Setup game
function setup() {
    snake = new Snake();
    snake.draw();

    fruit = new Fruit();
    fruit.randomSpawn();


    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        if (snake.eat(fruit)) {
            // console.log("eating");
            fruit.randomSpawn();
            score += 1;
            result.innerHTML = `${score}`;
        }
        snake.checkSelfCollision();
    }, snakeSpeed); //change snake speed
};

//Move by Arrow Keyboard
addEventListener('keydown', function (e) {
    // console.log(e); //check keycode
    let direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});


//image
let fruitImg = new Image();
fruitImg.src = './images/apple.png';

let snakeImg = new Image();
snakeImg.src = './images/snake-graphics-1.png';

//audio
let sound = new Audio();
sound.src = "./audio/eat.wav";

//restartButton
let restartButton = document.getElementById('restartButton');

restartButton.addEventListener('click', function () {
    gameOverMenu.style.visibility = "hidden";
    setup();
});