var QuebraDeLinha = require('../src/quebraDeLinha.js');

describe('Quebra de Linha', () => {
    it('Deve receber uma string e retornar a quantidade de palavras', () => {
        let quebraDeLinha = new QuebraDeLinha("Um pequeno jabuti xereta viu dez cegonhas felizes.", 20);
        expect(quebraDeLinha.retornaPalavras().length).toEqual(8);
    });

    it('Deve Retornar cada palavra a cada 20 linhas em uma linha diferente', () => {
        let quebraDeLinha = new QuebraDeLinha("Um pequeno jabuti xereta viu dez cegonhas felizes.", 20);
        expect(quebraDeLinha.separaEmGruposdeColunas()).toEqual("Um pequeno jabuti \nxereta viu dez \ncegonhas felizes. ");   
    });

    it('Deve Retornar a propria frase se menor que quantidade de colunas', () => {
        let quebraDeLinha = new QuebraDeLinha("Um pequeno jabuti xereta viu dez cegonhas felizes.", 60);
        expect(quebraDeLinha.separaEmGruposdeColunas()).toEqual("Um pequeno jabuti xereta viu dez cegonhas felizes.");  
    });

});