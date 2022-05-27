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

// Soma dos elementos de um array sem o uso do initialValue

/*

Crie uma função que recebe uma lista de preços e um número
representando o saldo disponível. Calcule qual será o saldo
final após subtrair todos os preços da lista enviada

*/


const listaPrecos = [
    {
      produto: 'Mouse',
      preco: 100.00
    },
    
      {
      produto: 'Teclado',
      preco: 315.00
    },
    
      {
      produto: 'Monitor',
      preco: 1415.00
    },
    
      {
      produto: 'MousePad',
      preco: 75.00
    }
  ];
  
  function calculaSaldo(lista, carteira){
    
    return 'Saldo Final: ' + lista.reduce(function(total, currentValue){
      
      return total - currentValue.preco;
                        
    },carteira) 
  }
  
  console.log(calculaSaldo(listaPrecos, 2000));