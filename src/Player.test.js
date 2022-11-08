import { Player, AiPlayer } from './Player'

it('New Player returns an object', () => {
    const player = new Player();
    expect(typeof player).toBe('object');
});

it('Player returns name property', () => {
    const name = 'Rachael';
    const player = new Player(name);
    expect(player.name).toBe('Rachael');
});

it('AiPlayer is an object', () => {
    expect(typeof AiPlayer).toBe('object')
})

it('AiPlayer has a name of AiPlayer', () => {
    expect(AiPlayer.name).toBe('AiPlayer')
})

it('AiPlayer has a method randomTurn', () => {
    expect(AiPlayer.randomTurn()).toBeDefined();
})

it('AiPlayer.randomTurn() returns an array of length 2', () => {
    expect(AiPlayer.randomTurn()).toHaveLength(2);
})