// Create class Fighter
export default class Fighter {
    constructor(name, power, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health = this.health - damage;
        console.log(`${this.health}`);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }

    async knockout() {
        return new Promise((resolve, reject) => {
            console.log('time is over');
            setTimeout(() => {
                resolve("Game over");
            }, 500);
        });
    }
}