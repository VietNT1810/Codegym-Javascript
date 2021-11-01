class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale;
        this.ySpeed = 0;
    }

    draw() {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = canvas.height;
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

    eat(fruit){
        if (this.x === fruit.x && this.y === fruit.y){
            return true;
        } else {
            return false;
        }
    }
}