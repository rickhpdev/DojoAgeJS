var MaiorEMenor = require('../src/MaiorEMenor.js');

describe("Maior e Menor", function() {

    it("Deve entender numeros em ordem nao sequencial", function() {
        let maioremenor = new MaiorEMenor();
        maioremenor.encontra([5,15,7,9]);

        expect(maioremenor.pegaMaior()).toEqual(15);
        expect(maioremenor.pegaMenor()).toEqual(5);
    });
	
	it("Deve entender numeros em ordem decrescente", function() {
        let maioremenor = new MaiorEMenor();
        maioremenor.encontra([9,8,7,6]);

        expect(maioremenor.pegaMaior()).toEqual(9);
        expect(maioremenor.pegaMenor()).toEqual(6);
    });
});