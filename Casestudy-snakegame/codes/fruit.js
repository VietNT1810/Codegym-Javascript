class Fruit {
    constructor() {
        this.x;
        this.y;
        this.spriteWidth = 320;
        this.spriteHeight = 256;
    }

    randomSpawn() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        // console.log(this.x, this.y);
    }

    draw() {
        // ctx.fillRect(this.x, this.y, scale, scale);
        ctx.drawImage(fruitImg, this.x, this.y, scale, scale);
    }
}

