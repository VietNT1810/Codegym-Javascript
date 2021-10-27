class Apple {
    constructor() {
        this.weight = 10;
    }
    
    decrease() {
        this.weight--;
    }

    isEmpty() {
        return this.weight == 0;
    }

    getWeight() {
        return this.weight;
    }
}