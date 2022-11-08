function Player(name) {
    return {
        name: name,

    }
}

let AiPlayer = Object.create(Player('AiPlayer'));

AiPlayer.randomTurn = function() {
    let coords = [];
    coords[0] = Math.floor(Math.random() * 10);
    coords[1] = Math.floor(Math.random() * 10);
    return coords;
}

export { Player, AiPlayer }