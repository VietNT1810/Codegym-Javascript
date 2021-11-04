class Snake {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.xSpeed = scale;
        this.ySpeed = 0;
        this.total = 1;
        this.tail = [];
        this.gameOver = document.getElementById('gameOver');
        
        this.sxHead = 64 * 4;
        this.syHead = 0;
    }

    draw() {
        ctx.fillStyle = "#487EFB";

        for (let i = 0; i < this.tail.length; i++) {
            // ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            ctx.drawImage(snakeImg, 64, 0, 64, 64, this.tail[i].x, this.tail[i].y, scale, scale);
        }

        // ctx.fillRect(this.x, this.y, scale, scale);
        ctx.drawImage(snakeImg, this.sxHead, this.syHead, 64, 64, this.x, this.y, scale, scale);
    }

    update() {
        //update snake tail
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = {
            x: this.x,
            y: this.y
        }

        //let snake run 
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //let snake go through wall
        if (this.x > canvas.width - scale) {
            this.x = 0;
        }
        else if (this.x < 0) {
            this.x = canvas.width - scale;
        }
        else if (this.y > canvas.height - scale) {
            this.y = 0;
        }
        else if (this.y < 0) {
            this.y = canvas.height - scale;
        }
    }

    changeDirection(direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
            default:
                break;
        }
    }

    eat(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            sound.play();
            return true;
        } else {
            return false;
        }
    }

    checkCollision() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                this.x = this.speed;
                this.gameOver.style.visibility = "visible";
            }
        }
    }
}

let snakeImg = new Image();
snakeImg.src = '../images/snake-graphics-1.png';
