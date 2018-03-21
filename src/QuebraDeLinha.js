//http://dojopuzzles.com/problemas/exibe/quebra-de-linha/

class QuebraDeLinha{
    constructor(frase, qtdeColunasQuebra){
        this.frase = frase;
        this.qtdeColunasQuebra = qtdeColunasQuebra;
    }

    retornaPalavras(){
        let frase = this.frase;
        return frase.split(' ');
    }

    separaEmGruposdeColunas(){
        if (this.frase.length <= this.qtdeColunasQuebra)
            return this.frase;
        
        let textoFinal = "";
        let tamanhoLinha = 0;

        let palavrasNaFrase = this.retornaPalavras();
        palavrasNaFrase.forEach(palavra => {
            palavra+=" ";
            tamanhoLinha += palavra.length;

            if(tamanhoLinha > this.qtdeColunasQuebra){            
                textoFinal += "\n" + palavra;
                tamanhoLinha = palavra.length;
            }else
                textoFinal += palavra;        
        });
        return textoFinal; 
    }

}

module.exports = QuebraDeLinha