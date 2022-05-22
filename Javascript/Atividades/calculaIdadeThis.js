// Atividade para treinar o uso do This


// Método call

const pessoa1 = {
    nome: 'Geraldo',
    idade: 23
}


function calculaIdade(anos) {
	return console.log(`Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos} anos de idade.`);
}

calculaIdade.call(pessoa1, 5); // uso de ","

// Método apply

const pessoa2 = {
    nome: 'Thainá',
    idade: 21
}

function calculaIdade(anos) {
	return console.log(`Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos} anos de idade.`);
}

calculaIdade.apply(pessoa2,[5]); // uso de "[]"