import Character from '../src/js/character';

test('add levelUp method', () => {
  const received = new Character('Маг');
  received.levelUp();
  const expected = {
    name: 'Маг', level: 2, health: 100, attack: 48, defence: 36,
  };
  expect(received).toEqual(expected);
});
