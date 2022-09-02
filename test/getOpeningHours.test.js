const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('testa se getOpeningHours com !param retorna um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('testa se para os argumentos Tuesday e 09:00-AM retorna The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('testa se para os argumentos Wednesday e 09:00-PM retorna The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('testa se para os argumentos Monday e 09:00-AM retorna The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('testa se abreviação do dia da semana volta mensagem de error', () => {
    expect(() => (getOpeningHours('Thu', '09:00-AM'))).toThrow('The day must be valid. Example: Monday');
  });
  test('testa se alterada o padrão do formato do horário volta mensagem de error', () => {
    expect(() => (getOpeningHours('Friday', '09:00-ZM'))).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('testa se inserido algum diferente de number no locao de horas volta mensagem de error', () => {
    expect(() => (getOpeningHours('Friday', '0C:00-ZM'))).toThrow('The hour should represent a number');
  });
  test('testa se inserido algum diferente de number no locao de minutos volta mensagem de error', () => {
    expect(() => (getOpeningHours('Friday', '02:P0-ZM'))).toThrow('The minutes should represent a number');
  });
});
