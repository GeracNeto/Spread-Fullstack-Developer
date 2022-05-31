// Atividade: validação de erros por tipo Throw

// Erros
const error1 = new ReferenceError('Envie os parâmetros');
const error2 = new TypeError('O array precisa ser do tipo Object');
const error3 = new RangeError('Tamanho inválido');

// Utilizando o Throw
function returnArray(array, num){
    // Tratamento de erros

    // verifica se foi passado o array e o número
    if(!array || !num) {
        throw error1;
    }

    // Verifica se o array é do tipo objeto e se o num é do tipo number
    else if(typeof array !== 'object' || typeof num !== 'number'){
        throw error2;
    } 

    // Verifica se o tamanho do array corresponde com o valor de num
    else if(array.length !== num){
        throw error3;
    } ;
    
    // Função
    return array;

}

console.log(returnArray([1,2,3], 3));
