class Player {
    constructor(name, health = 100, power = 10)
    {
        this.name = name;
        this.health = health;
        this.power = power;
    }
        hit (power) {
            this.health -= power;
        }
        useItem(item) {
            this.health += item.health;
            this.health += item.power;
        }
        showStatus() {
            console.log(`${this.name},Health: ${this.health},Power: ${this.power}`);
        }
}

class ShootingGame{
    constructor(player1, player2) {
        super();
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        health = Math.floor(Math.random() * 2);
        power = Math.floor(Math.random() * 2); 
        return {health, power };  
    }

    start() {
        let round = 1
        //show each player status before shooting
        while (this.player1.health > 0 && this.player2.health > 0){
            this.player1.showStatus();
            this.player2.showStatus();
            console.log(this.player1.showStatus());
            console.log(this.player2.showStatus());

            let item1 = this.getRandomItem();
            let item2 = this.getRandomItem();
            
            this.player1.useItem(item1);
            this.player2.useItem(item2);

            this.player1.showStatus();
            this.player2.showStatus();

            console.log(this.player1.health);
            console.log(this.player2.health);

            this.player1.hit(this.player2.power);

            if(this.player1.health <= 0) {
                console.log("Player one wins");
                break;
            }

            this.player2.hit(this.player1.power);
            
            if (this.player2.health <= 0) {
                 console.log("Player two wins");
                 break;
            }
        }
        round++
    }
}

const player1 = new Player("Player one");
const player2 = new Player("Player two");
const game = new ShootingGame(player1, player2);
game.start(player1, player2);