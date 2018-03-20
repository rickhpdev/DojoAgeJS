class MaiorEMenor{
	constructor() {
		this.maior = Number.MIN_VALUE;
		this.menor = Number.MAX_VALUE;
	}
	
	encontra(nums){
		let instancia = this;
		nums.forEach(function(num) {
			if(num < instancia.menor) instancia.menor = num;
			if(num > instancia.maior) instancia.maior = num;
		});
	}
	pegaMaior(){
		return this.maior;
	}
	pegaMenor(){
		return this.menor;
	}	
}
	
module.exports = MaiorEMenor