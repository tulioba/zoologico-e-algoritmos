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
  test('testa se tem output null se o parametro é string', () => {
    expect(handlerElephants('undefined')).toBe(null);
  });
  test('testa se ', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  test('testa se ', () => {
    expect(handlerElephants(2222)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
