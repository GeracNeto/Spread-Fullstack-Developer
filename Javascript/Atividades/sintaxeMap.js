// Atividade Uso do Método Map

// Exemplo da aula 

const array = [1,2,3];

const num1 = {
    value: 2
}

const num2 = {
    value: 4
}

const num3 = {
    value: 6
}

function testMap(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log(testMap(array, num2));

// Exemplo meu do uso do thisArg

// Código abaixo pega o array de objetos "pessoas" e mapeia cada um deles com o método .map. Correlaciona cada elemento desse array com os objetos "ids" 

const pessoas = [
    {
        nome: 'Pedro',
        idade: 23
    },
    {
        nome: 'Roberto',
        idade: 45
    },
    {
        nome: 'Ana',
        idade: 59
    },
    {
        nome: 'Rodrigo',
        idade: 15
    },
    {
        nome: 'Rafael',
        idade: 5
    }
]

const id01 = {
    aprova: ' Aprovado'
}
const id02 = {
    aprova: ' Aprovado'
}
const id03 = {
    aprova: ' Aprovado'
}
const id04 = {
    aprova: ' Aprovado'
}
const id05 = {
    aprova: ' Aprovado'
}

function aprovaTodos(ar,arg){
    return ar.map(function(people){

        return people.nome + this.aprova // Tanto faz usar "this" quanto "arg.aprova"

    }, arg)
}

console.log(aprovaTodos(pessoas, id01));
/* Saída

[
  'Pedro Aprovado',
  'Roberto Aprovado',
  'Ana Aprovado',
  'Rodrigo Aprovado',
  'Rafael Aprovado'
]

*/