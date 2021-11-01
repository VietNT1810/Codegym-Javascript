let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let scale = 10;

let rows = canvas.height / scale;
let columns = canvas.width / scale;

let snake;
let fruit;

let score = 0;
let result = document.querySelector('.result');

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
            console.log("eating");
            fruit.randomSpawn();
            score += 10;
            result.innerHTML = `Score: ${score}`;
        }
    }, 200); //change snake speed
};

setup();


//Move by Arrow Keyboard
addEventListener('keydown', function (e) {
    // console.log(e); //check keycode
    let direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});