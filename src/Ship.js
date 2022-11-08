// e.g. Carrier = new Ship('carrier')


export default function Ship(type) {
    let length;
    if (type == 'carrier') {
        length = 5;
    } else if (type == 'battleship') {
        length = 4;
    } else if (type == 'submarine' || type == 'destroyer') {
        length = 3;
    } else if (type == 'patrol') {
        length = 2;
    } 

    return {
        type: type,
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

    }
}