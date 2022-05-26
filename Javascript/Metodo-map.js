// Método map

// O map retorna um novo array de acordo com a função inserida. Essa função vai passar por todos os elementos do array

const array = [1, 2, 3, 4, 5];
let newArray = [];

newArray = array.map((item) => item * 2); // Retorna: [2, 4, 6, 8, 10]

console.log(newArray);

// Outro exemplo

const nomes = ['Geraldo', 'Millena', 'Thaina', 'Thiago'];

function somaPereira(arr){
    return arr + ' Pereira';
}

let nomesPereira = nomes.map(somaPereira); // o .map vai executar a função "somaPereira" para cada elemento do array

console.log(nomesPereira);



