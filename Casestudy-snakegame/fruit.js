class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    randomSpawn() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        console.log(this.x, this.y);
    }

    draw() {
        ctx.fillStyle = "#E1B114";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}