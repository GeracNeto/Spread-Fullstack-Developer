// Atividade Uso do Método Reduce

// Soma dos elementos de um array sem o uso do initialValue

const numbers = [175, 50, 25];

function somaArraySemInitial(total, currentValue){
  return total + currentValue;
}

console.log('Sem o uso do initialValue: '+ numbers.reduce(somaArraySemInitial))

// Soma dos elementos de um array com o uso do initialValue

function somaArrayComInitial(arr, initialValue){
  return arr.reduce(function(tota, current){
     
    return tota + current;
                    
  }, initialValue);
}

console.log('Com o uso do initialValue: ' + somaArrayComInitial(numbers, 200)); // Como valor inicial está sendo passado 200. Logo a soma final terá 200 a mais

