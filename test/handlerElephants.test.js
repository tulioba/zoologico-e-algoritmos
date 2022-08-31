const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('testa se retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('testa se retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });
  test('testa se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('testa se retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('testa se retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('testa se retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('testa se função exige string como parametro', () => {
    expect(handlerElephants('undefined')).toBe(null);
  });
});
