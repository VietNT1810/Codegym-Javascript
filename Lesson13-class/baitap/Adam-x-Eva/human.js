class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        if (this.gender == 'male') {
            return true;
        } else {
            return false;
        }
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(apple) {
        return apple.getWeight() > 0;
    }

    eat(apple) {
        if (this.checkApple(apple)) {
            this.weight++;
            apple.decrease();
        }
    }

    say() {
        return `${this.name} cắn một miếng táo`;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }
}