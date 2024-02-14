class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;
        return { health, power };
    }

    start() {
        let round = 1;
        while (this.player1.health > 0 && this.player2.health > 0) {
            this.player1.showStatus();
            const item1 = this.getRandomItem();
            this.player1.useItem(item1);
            this.player1.showStatus();
            console.log(this.player1.health)
            
            this.player2.showStatus();
            const item2 = this.getRandomItem();
            this.player2.useItem(item2);
            this.player2.showStatus();

            this.player2.hit(this.player1.power);
            console.log(`Player 1 (${this.player1.power} power) hits Player 2. Player 2 health: ${this.player2.health}`);

            if (this.player2.health <= 0) {
                console.log(`${this.player1.name} wins!`);
                break;
            }

            this.player1.hit(this.player2.power);
            console.log(`Player 2 (${this.player2.power} power) hits Player 1. Player 1 health: ${this.player1.health}`);

            if (this.player1.health <= 0) {
                console.log(`${this.player2.name} wins!`);
                break;
            }

            round++;
        }
    }
}

const player1 = new Player("Player A");
const player2 = new Player("Player B");
const game = new ShootingGame(player1, player2);
game.start(player1, player2);