// Carrier = new Ship(5)
// Battleship = new Ship(4);
// Destroyer = new Ship(3);
// Submarine = new Ship(3);
// Patrol Boat = new Ship(2);

export default function Ship(length) {

    return {
        length: length,
        timesHit: 0,
        sunk: false,
        hit() {
            return this.timesHit += 1;
        },
        isSunk() {
            if (this.timesHit === this.length) {
                return this.sunk = true;
            } else {
                return this.sunk = false;
            }
        },
        shipType() {
            if (this.length === 5) {
                return 'carrier'
            } else if (this.length === 4) {
                return 'battleship' 
            } else if (this.length === 3) {
                let count = Math.floor(Math.random() * 2);
                if (count === 0) {
                    return 'submarine'
                } else if (count === 1) {
                    return 'destroyer'
                } 
            } else if (this.length == 2) {
                return 'patrolBoat'
            }
        }
    }
}