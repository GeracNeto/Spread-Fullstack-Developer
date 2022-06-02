/*
Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

*/

// Classe Pai

class ContaBancaria{
    // Cria as prorpriedades da classe
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia,
        this.numero = numero,
        this.tipo = tipo,
        this.saldo = 0
    }

    // Retorna o saldo
    get getSaldo(){
        return 'Seu saldo é: ' + this.saldo; 
    }

    // Muda o saldo
    set changeSaldo(addSaldo){
        this.saldo = addSaldo; 
    }

    // Método para sacar um valor da conta
    sacar(valor){ 
        // Verifica se tem saldo na conta antes do saque
        if(valor > this.saldo){
            return 'Operação Negada';
        }
        else{
            this.saldo -= valor; // Mesmo que escrever: this.saldo = this.saldo - valor
            return 'Valor retirado de: ' + valor + ' Seu saldo agora é: ' + this.saldo;
        }
    }

    // Método para depositar um valor na conta
    depositar(valor1){
        this.saldo += valor1; // Mesmo que escrever: this.saldo = this.saldo + valor 
        return 'Valor depositado de: ' + valor1 + ' Seu saldo agora é: ' + this.saldo;
    }

}

// Classe Filha 1

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'Corrente', // Defini o tipo como fixo em 'Corrente' já que a classe é contaCorrente
        this.cartaoCredito = cartaoCredito
        //this.saldo = saldo
    }

    get cartao(){
        return 'Seu cartão de crédito: ' + this.cartaoCredito;
    }

    set changecartao(newNumero){
        this.cartaoCredito = newNumero;
    }
}

// Classe Filha 2

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Poupança',
        this.saldo = saldo
    }
}

// Classe Filha 3

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Universitária',
        this.saldo = saldo
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação Cancelada'
        }

        else{
            this.saldo -= valor;
            return 'Valor retirado de: ' + valor + ' Seu saldo agora é: ' + this.saldo;
        }
    }
}

// Testes ->

let conta4 = new ContaUniversitaria('Santander', 3435, 1000);

console.log(conta4.sacar(400));

/************************************************************************************/

let conta3 = new ContaPoupanca('Santander', 3435, 1000);

console.log(conta3.depositar(500));

console.log(conta3);


/************************************************************************************/

let conta2 = new ContaCorrente('Santander', 3435, 1000, 1234567890120000);

conta2.changecartao = 3232232323232332;

console.log(conta2);

conta2.depositar(200);

console.log(conta2);

/************************************************************************************/

let conta1 = new ContaBancaria('Santander', 3435, 'Corrente', 1000);

console.log(conta1);

console.log(conta1.sacar(200));

console.log(conta1.getSaldo);

console.log(conta1.depositar(400));

conta1.changeSaldo = 500;

console.log(conta1.getSaldo)
