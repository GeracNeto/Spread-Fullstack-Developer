// Atividade Uso do Método Filter

// Filtre e retorne todos os números pares de um array

const array = [23,2,56,234,86,2,64,3,65,2,5,57,123];

const evenArray = array.filter(function(item){
    return item % 2 === 0; // retorna todos os números pares do array
})

console.log(evenArray);
