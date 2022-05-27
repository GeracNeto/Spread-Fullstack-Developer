// Método map

// O map retorna um novo array de acordo com a função inserida. Essa função vai passar por todos os elementos do array

const array = [1, 2, 3, 4, 5];
let newArray = [];

newArray = array.map((item) => item * 2); // Retorna: [2, 4, 6, 8, 10]

console.log(newArray);

// Outro exemplo

// Coloca Pereira em todos os nomes

const nomes = ['Geraldo', 'Millena', 'Thaina', 'Thiago'];

function somaPereira(arr){
    return arr + ' Pereira';
}

let nomesPereira = nomes.map(somaPereira); // o .map vai executar a função "somaPereira" para cada elemento do array

console.log(nomesPereira);


// Outro exemplo

// Soma 5 anos para cada idade de todas as pessoas

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

const idadeSoma5 = pessoas.map(function(item){
    return item.idade + 5;
})
    

console.log(idadeSoma5);

