// Atividade: validação de erros por tipo Throw

// Erros
const error1 = new Error('ReferenceError');
const error2 = new Error('TypeError');
const error3 = new Error('RangeError');

// Utilizando o Throw
function returnArray(array, num){
    // Tratamento de erros

    // verifica se foi passado o array e o número
    if(!array || !num) {
        error1.name = 'Erro de Referencia';
        throw error1;
    }

    // Verifica se o array é do tipo objeto e se o num é do tipo number
    else if(typeof array !== 'object' || typeof num !== 'number'){
        error2.name = 'Erro de tipo';
        throw error2;
    } 

    // Verifica se o tamanho do array corresponde com o valor de num
    else if(array.length !== num){
        error3.name = 'Erro de Range';
        throw error3;
    } ;
    
    // Função
    return array;

}

console.log(returnArray([1,2,3],3));
