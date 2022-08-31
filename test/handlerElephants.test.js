const { species } = require('../data/zoo_data');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    text('testando se retorna a quantidade de elefantes', () => {
        expect(const ele = species.filter((specie) => {
            return specie.name === 'elephants'
        }))
    })
});








// test('Teste se productDetails é uma função.', () => {
//     expect(typeof productDetails).toEqual('function');
//   });