// Atividade 2 Sets

// Desenvolver código que tranforma um array em um Set e retorne um outro array apenas com valores únicos

// Método 1

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

let mySet = new Set();

for(let i = 0; i < array.length; i++){
  
  mySet.add(array[i]); // Adicona no set todos os elementos do array
  
}


console.log([...mySet]); // Tranforma o set um array utilizado a técnica do spread


// Método 2

const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function transformArrayToSet(array){
  const newSet = new Set(array); // Transforma o array em um Set
  
  return console.log([...newSet]);
}

transformArrayToSet(myArray);